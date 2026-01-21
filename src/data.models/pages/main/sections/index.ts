import welcomeData from "./welcome/data.json"
import WelcomeSchema from "./welcome/schema"

export interface PageDataType {
  welcome: WelcomeSchema;
}

const pageData: PageDataType = {
  welcome: welcomeData,
}

export const {welcome} = pageData;

export default pageData;