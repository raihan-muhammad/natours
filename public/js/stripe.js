import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51GqnAEDuPS0meUVnZhNF5AYlCGIzQEcGss3XF7ti9MzEghFp6A2aMXx3A1kzBBhlc1zQP7CslNOMCXIvXmor74K300NJOIvDdM'
    );
    const session = await axios(
      `http://localhost:8000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    console.log(session);
  } catch (err) {
    showAlert('error', err);
  }
};
