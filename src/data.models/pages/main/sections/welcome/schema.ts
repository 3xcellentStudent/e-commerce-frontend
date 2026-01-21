export default interface WelcomeSchema {
  textBlock: {
    suptitle: string;
    title: string;
    lead: string;
  };
  imageBlock: {
    src: string;
    srcset: string;
    alt: string;
  }
}