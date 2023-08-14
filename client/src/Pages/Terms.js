import React from "react";
import pic from "../assets/pexels-donald-tong-189296.jpg";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="terms">

      <div className="term-paragraph">
        <h3>Terms and Conditions</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget tristique elit, vitae accumsan enim. Ut condimentum purus tellus,
          sed pellentesque ligula laoreet id. Vivamus tincidunt efficitur nibh,
          vel ornare arcu semper nec. Donec et lectus ante. Vestibulum hendrerit
          velit risus, in tristique purus dignissim sit amet. Sed mattis risus
          eu varius mollis. Sed aliquet sit amet lacus ac finibus. Nulla
          convallis enim sit amet sollicitudin facilisis. Nulla nec tortor nec
          est porta lobortis. Phasellus venenatis quis nulla quis dictum. Fusce
          ullamcorper velit neque, sit amet aliquam ipsum eleifend in. In ornare
          eros lacinia elit pulvinar, quis ultricies quam aliquam. Praesent dui
          risus, finibus eu porta sagittis, dapibus id lacus. Suspendisse quis
          ex ultricies, laoreet magna vel, aliquet purus. Integer non turpis
          eget tellus eleifend rutrum. Sed placerat sem velit, in iaculis magna
          posuere eget. Sed accumsan mi justo, ut sagittis diam elementum non.
          Phasellus ac fermentum ante. Pellentesque ut sagittis nunc, in
          suscipit augue. Proin euismod sodales dolor, a pulvinar eros volutpat
          ut. Aenean erat ipsum, rhoncus vitae vestibulum id, volutpat tempus
          est. Fusce in est turpis. Nullam tristique, magna id efficitur congue,
          arcu nulla varius lacus, non hendrerit leo dolor ut est. Praesent
          ultrices ullamcorper ultrices. In sed turpis sit amet ante mollis
          varius. Etiam vestibulum tincidunt tortor et suscipit. Integer vel
          lorem imperdiet, tempus arcu nec, condimentum nisi. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Vestibulum vitae ullamcorper arcu.
        </p>
        <Link to={'/'}>Back</Link>
      </div>

    </div>
  );
};

export default Terms;
