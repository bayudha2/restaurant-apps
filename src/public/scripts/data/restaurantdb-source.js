import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (err) {
      return 'failed';
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (err) {
      return 'failed';
    }
  }

  static async uploadReview(reviewObject) {
    const request = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(reviewObject),
    });
    await request.json();
    await document.location.reload();
  }
}

export default RestaurantDbSource;
