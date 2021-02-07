import { RouteComponentProps } from "@reach/router"
import { ComponentProps, ComponentType } from "react"

const withRouterProps = <P extends ComponentProps<any>>(Component: ComponentType<P>, props?: P ) => (RouterProps: RouteComponentProps) => <Component {...RouterProps} {...props} />

export default withRouterProps;
