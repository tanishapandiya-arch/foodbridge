import roleMiddleware from "./roleMiddleware.js";

const adminMiddleware = roleMiddleware("admin");

export default adminMiddleware;