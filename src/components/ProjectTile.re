module Link = Gatsby.Link;
// module { FaExternalLinkAlt } from "react-icons/fa";
// %bs.raw
// {| import { FaExternalLinkAlt } from 'react-icons/fa' |};

type imageInfoString = {
  image: option(string),
  alt: string,
};

type tileState =
  | Words
  | Image;

[@react.component]
let make = (~post) => {
  let possNullExternal = Js.Nullable.toOption(post##frontmatter##ext);
  let renderContentJsx = () => {
    <div>
      <div className="font-bold text-xl mb-2">
        {React.string(post##frontmatter##title)}
      </div>
      <p className="text-gray-700 text-base">
        {React.string(post##excerpt)}
      </p>
    </div>;
  };
  <div className="max-w-sm rounded overflow-hidden shadow-lg h-64">
    <div className="px-6 py-4"> {renderContentJsx()} </div>
    <div>
      {switch (possNullExternal) {
       | None => React.null
       | Some(img) =>
         <a href=img target="_blank" rel="noopener noreferrer">
           {React.string("EXTERNAL LINK")}
         </a>
       }}
    </div>
    <div className="px-6 py-4">
      {post##frontmatter##tech
       ->Belt.Array.map(item =>
           <span
             className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
             key=item>
             {React.string(item)}
           </span>
         )
       /* Since everything is typed, the arrays need to be, too! */
       ->React.array}
    </div>
  </div>;
};

let default = make;
