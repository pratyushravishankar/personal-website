module Link = {
  [@bs.module "gatsby-link"] [@react.component]
  external make:
    (
      ~_to: string, /* "to" is a reserved keyword in Reason, BuckleScript compiles _to  -> to in raw JS (quirky I know!)  */
      ~rel: option(string)=?,
      ~className: option(string)=?,
      ~style: option(ReactDOMRe.Style.t)=?,
      ~activeStyle: option(ReactDOMRe.Style.t)=?,
      ~activeClassName: option(string)=?,
      ~children: option(React.element)=?
    ) =>
    React.element =
    "default";
};
