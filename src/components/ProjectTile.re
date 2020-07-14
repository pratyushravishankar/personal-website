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
    <div className="flex flex-col justify-centers items-center">
      <div className="flex flex-row justify-center ">
        <div className="font-bold text-2xl mb-2 text-cadet">
          {React.string(post##frontmatter##title)}
        </div>
        <div>
          {switch (possNullExternal) {
           | None => React.null
           | Some(ext) =>
             <a href=ext target="_blank" rel="noopener noreferrer">
               <svg
                 className="fill-current text-cadet hover:text-celadon-green"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 width="30"
                 height="30">
                 <path
                   className="heroicon-ui"
                   d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                 />
               </svg>
             </a>
           }}
        </div>
      </div>
      <p className=" text-base text-cadet"> {React.string(post##excerpt)} </p>
    </div>;
  };
  // className="max-w-sm rounded overflow-hidden bg-gray-200 border-b-4 border-bluedark h-64">

  <div className="sm:w-1/3 mt-4">
    <div
      className="bg-white h-full p-8  border-2 border-b-8 border-cadet rounded-lg flex flex-col justify-center items-center sm:mx-2 sm:p-3 md:p-8">
      <div className="px-6 py-4"> {renderContentJsx()} </div>
      <div className="px-6 py-">
        {post##frontmatter##tech
         ->Belt.Array.map(item =>
             <span
               className="inline-block bg-cadet rounded-full px-3 py-1 mt-1 text-sm font-semibold text-white mr-2 b"
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
