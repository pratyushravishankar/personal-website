module Link = Gatsby.Link;

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

  let possNullImg = Js.Nullable.toOption(post##frontmatter##featuredimage);
  let renderImageJsx = () => {
    <div>
      {switch (possNullImg) {
       | None => React.string("placeholderimageMAIN")
       | Some(img) =>
         <div
           //    <PreviewCompatibleImage
           //      imageInfo={
           //        image: img,
           //        alt: "featured image thumbnail for post ${post##frontmatter##title}",
           //      }
           //    />
         />
       }}
    </div>;
  };
  let renderWordsJsx = () => {
    <div>

        {switch (possNullImg) {
         | None => React.string("placeholderimageWORDS")
         | Some(img) =>
           <div
             //  <PreviewCompatibleImage
             //    imageInfo={
             //      image: img,
             //      alt: "featured image thumbnail for post ${post##frontmatter##title}",
             //    }
             //  />
           />
         }}
        <div className="font-bold text-xl mb-2">
          {React.string(post##frontmatter##title)}
        </div>
        <p className="text-gray-700 text-base">
          {React.string(post##excerpt)}
        </p>
      </div>;
      // <div>
      //     <header>
      //       {switch (possNullImg) {
      //        | None => React.null
      //        | Some(img) =>
      //          <div
      //            //  <PreviewCompatibleImage
      //            //    imageInfo={
      //            //      image: img,
      //            //      alt: "featured image thumbnail for post ${post##frontmatter##title}",
      //            //    }
      //            //  />
      //          />
      //        }}
      //       <p>
      //         <span />
      //         <span> {React.string(post##frontmatter##title)} </span>
      //       </p>
      //     </header>
      //     <p> {post##excerpt} <br /> <br /> </p>
      //   </div>;
      // <Link _to={post##fields##slug}> {React.string("Keep Reading")} </Link>
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
  //   <div>
  //     <article
  //       onMouseEnter={_ => setTileState(_ => Words)}
  //       onMouseLeave={_ => setTileState(_ => Image)}>
  //       {switch (tileState) {
  //        | Words => renderWordsJsx()
  //        | Image => renderImageJsx()
  //        }}
  //     </article>
  //   </div>;
};

let default = make;
