import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="terms">
      <div className="term-paragraph">
      
      <div style={{padding: '5%'}}>
      <h1>Terms and Conditions</h1>
      <br />
      <p>
          Check-in and Check-out: Check-in time is 3:00 PM, and check-out time
          is 12:00 PM. Early check-in or late check-out is subject to
          availability and additional charges. 
          <br />
          Reservation Policies: All
          reservations require a valid credit card for booking. Guests must be
          at least 18 years of age to make a reservation. Any special requests
          or preferences should be communicated at the time of booking.
          <br />
          Cancellation Policy: Cancellation must be made 48 hours before the
          scheduled check-in time to avoid a cancellation fee, which is equal to
          one night's room rate. 
          <br />
          Payment: We accept major credit cards and cash
          payments. A valid credit card is required for check-in, even if you
          intend to pay in cash. A pre-authorization may be placed on your
          credit card for incidentals upon check-in. 
          <br />
          Rates and Taxes: Room rates
          are subject to change without notice and may vary based on
          availability, room type, and season. All rates are subject to
          applicable taxes and fees as per local regulations. 
           
          <br />
          Damage and Incidentals: Guests
          will be responsible for any damage to the hotel property or rooms
          during their stay, and the cost of repairs or replacement will be
          charged to the guest's credit card. 
          <br />
          Guest Conduct: Guests are expected
          to conduct themselves in a respectful and courteous manner at all
          times. Any disruptive or unruly behavior may result in eviction
          without a refund. 
          <br />
          Pet Policy: Pets are not allowed on the premises,
          with exceptions made for certified service animals as required by law.
          <br />
          Lost and Found: De Luxe Blu Hotel is not responsible for any lost or
          stolen items. Guests are advised to use in-room safes for valuable
          belongings. 
          <br />
          Privacy Policy: The hotel respects the privacy of its
          guests and complies with all applicable data protection laws. Personal
          information provided during booking or check-in will be used for
          registration and billing purposes only. 
          <br />
          Amenities and Services: Access
          to amenities such as the pool, gym, spa, and restaurant may be subject
          to availability and operational hours. 
          
          <br />
          Force Majeure: The hotel shall not be liable for failure to perform
          any of its obligations under these terms and conditions if such
          failure is the result of circumstances beyond its control, including
          but not limited to acts of God, natural disasters, and government
          actions. 
          <br />
          By making a
          reservation at De Luxe Blu Hotel, you agree to abide by these terms
          and conditions. Failure to comply with these terms may result in
          additional charges or eviction from the property. Please contact our
          front desk for any clarifications or inquiries.
        </p>
      </div>
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  );
};

export default Terms;
