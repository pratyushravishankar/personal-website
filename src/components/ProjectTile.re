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
      <div className="font-bold text-xl mb-2 text-bluedark">
        {React.string(post##frontmatter##title)}
      </div>
      <p className="text-gray-700 text-base text-bluedarkest">
        {React.string(post##excerpt)}
      </p>
    </div>;
  };
  // className="max-w-sm rounded overflow-hidden bg-gray-200 border-b-4 border-bluedark h-64">

  <div className="sm:w-1/3 mt-4">
    <div
      className="bg-white h-full p-8 border-b-4 border border-bluedark rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
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
               className="inline-block bg-bluedark rounded-full px-3 py-1 mt-1 text-sm font-semibold text-white mr-2 b"
               key=item>
               {React.string(item)}
             </span>
           )
         /* Since everything is typed, the arrays need to be, too! */
         ->React.array}
      </div>
    </div>
  </div>;
};

let default = make;
