import React, { Fragment, HTMLAttributes, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";

export function Loadable<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & HTMLAttributes<T>) => (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
}

const Index = () => {
  const publicElement = useRoutes([...publicRoutes]);
  return <Fragment>{publicElement}</Fragment>;
};

export default Index;
