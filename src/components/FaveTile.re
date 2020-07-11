module Link = Gatsby.Link;
module Image = Gatsby.Image;

type imageInfoString = {
  image: option(string),
  alt: string,
};

// module PreviewCompatibleImage = {
//   [@bs.module "./PreviewCompatibleImage.js"] [@react.component]
//   external make: (~imageInfo: imageInfoString) => React.element = "default";
// };

type tileState =
  | Words
  | Image;

[@react.component]
let make = (~post) => {
  let (tileState, setTileState) = React.useState(_ => Image);

  let possNullImg = Js.Nullable.toOption(post##frontmatter##image);
  let renderImageJsx = () => {
    <div>
      {switch (possNullImg) {
       | None => React.null
       | Some(img) => <div> <Image fluid=img##childImageSharp##fluid /> </div>
       }}
    </div>;
  };
  let renderWordsJsx = () => {
    <div>
      <div className="font-bold text-xl mb-2">
        {React.string(post##frontmatter##title)}
      </div>
      <p className="text-gray-700 text-base">
        {React.string(post##excerpt)}
      </p>
    </div>;
  };
  <div
    className="max-w-sm rounded overflow-hidden shadow-lg h-64"
    onMouseEnter={_ => setTileState(_ => Words)}
    onMouseLeave={_ => setTileState(_ => Image)}>
    //   <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">

      <div className="px-6 py-4">
        {switch (tileState) {
         | Words => renderWordsJsx()
         | Image => renderImageJsx()
         }}
      </div>
      <div className="px-6 py-4">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {React.string("#photography")}
        </span>
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {React.string("#travel")}
        </span>
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {React.string("#winter")}
        </span>
      </div>
    </div>;
};

let default = make;
