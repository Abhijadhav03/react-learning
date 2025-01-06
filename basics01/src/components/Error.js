// import React from "react";
// import { useRouteError } from "react-router-dom";

// const ErrorPage = () => {
//   const error = useRouteError();
//   console.error(error);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Oops! Something went wrong.</h1>
//       <p>{error?.statusText || "An unexpected error occurred."}</p>
//     </div>
//   );
// };

// export default ErrorPage;
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


