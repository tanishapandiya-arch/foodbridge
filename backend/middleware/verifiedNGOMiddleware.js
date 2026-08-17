import User from "../models/User.js";

const verifiedNGOMiddleware = async (req, res, next) => {

  try {

    const user = await User.findById(
      req.user.userId
    );


    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }


    if (user.role !== "ngo") {

      return res.status(403).json({
        message: "Only NGOs can access this"
      });

    }


    if (!user.isVerified) {

      return res.status(403).json({
        message: "NGO is not verified by admin"
      });

    }


    next();

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

};


export default verifiedNGOMiddleware;