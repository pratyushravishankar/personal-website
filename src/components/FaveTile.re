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
    <div className="px-6 py-4 flex flex-col items-center sm:p-3 md:p-8">
      <div className="font-roboto font-bold text-xl mb-2 text-white">
        {React.string(post##frontmatter##title)}
      </div>
      <p className="font-roboto text-white text-base">
        {React.string(post##excerpt)}
      </p>
    </div>;
  };
  <div className="sm:w-1/3 mt-4">
    <div
      className="h-full overflow-hidden rounded-lg border-b-4 border-cadet bg-cadet p-1 shadow-2xl h-64 flex flex-col sm:mx-2"
      onMouseEnter={_ => setTileState(_ => Words)}
      onMouseLeave={_ => setTileState(_ => Image)}>
      //   <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">

        <div>
          {switch (tileState) {
           | Words => renderWordsJsx()
           | Image => renderImageJsx()
           }}
        </div>
        <div className="px-6 py-4">
          <span
            className="font-roboto inline-block bg-red rounded-full px-3 py-1 text-sm font-semibold text-champagne mr-2">
            {React.string("#photography")}
          </span>
          <span
            className="font-roboto inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {React.string("#travel")}
          </span>
          <span
            className="font-roboto inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {React.string("#winter")}
          </span>
        </div>
      </div>
  </div>;
};

let default = make;
