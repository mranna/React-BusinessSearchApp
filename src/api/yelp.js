import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xp-LwCc9l-M7dznVf7Or3GRwRewN6egDfqUUcZb4qZCsfbRHlC6xguzsKQS47-Sa8a3gmUHcR2N5zAW9ysqcf-tZsOWx0knO1IfbINFR2JqGcA1uIQdaYSNZSRxoX3Yx",
  },
});
