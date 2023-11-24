import Link from "next/link";

import Button from "./ui/Button";

import "./ErrorPage.styles.scss";

const ErrorPage = () => {
  return (
    <div>
      <h1>
        Oops. This page doesn&apos;t exist.
        <Link href="/" className="btn">
          <Button>Home</Button>
        </Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
