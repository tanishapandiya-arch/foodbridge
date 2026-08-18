import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReloadToHome() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const navigation = performance.getEntriesByType("navigation")[0];

    if (
      navigation &&
      navigation.type === "reload" &&
      location.pathname !== "/"
    ) {

      navigate("/", { replace: true });

    }

  }, []);

  return null;
}

export default ReloadToHome;