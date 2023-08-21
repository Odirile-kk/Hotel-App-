import https from 'https';

const PAYSTACK_SECRET_KEY = 'sk_test_35fe4eeb0aff4639546fc811b809bd0db89f29ea';

const initiatePayment = async (req, res) => {
  const { email, amount } = req.body;
  console.log('Received Amount:', amount);

  const params = JSON.stringify({
    email: email,
    amount: amount,
  });

  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/transaction/initialize',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  const request = https.request(options, (responseFromPaystack) => {
    let data = '';
    responseFromPaystack.on('data', (chunk) => {
      data += chunk;
    });
    responseFromPaystack.on('end', () => {
      const responseData = JSON.parse(data);
      res.json(responseData);
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  });

  request.write(params);
  request.end();
};

export { initiatePayment };
