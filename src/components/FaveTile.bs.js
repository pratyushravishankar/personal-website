// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var GatsbyImage = require("gatsby-image");

function FaveTile(Props) {
  var post = Props.post;
  var match = React.useState(function () {
        return /* Image */1;
      });
  var setTileState = match[1];
  var possNullImg = post.frontmatter.image;
  var renderImageJsx = function (param) {
    return React.createElement("div", undefined, (possNullImg == null) ? null : React.createElement("div", undefined, React.createElement(GatsbyImage.default, {
                          fluid: possNullImg.childImageSharp.fluid
                        })));
  };
  var renderWordsJsx = function (param) {
    return React.createElement("div", {
                className: "px-6 py-4 flex flex-col items-center sm:p-3 md:p-8"
              }, React.createElement("div", {
                    className: "font-bold text-xl mb-2 text-white"
                  }, post.frontmatter.title), React.createElement("p", {
                    className: "text-white text-base"
                  }, post.excerpt));
  };
  return React.createElement("div", {
              className: "sm:w-1/3 mt-4"
            }, React.createElement("div", {
                  className: "h-full overflow-hidden rounded-lg border-b-4 border-aquamarine shadow-2xl h-64 bg-bluedarkest flex flex-col sm:mx-2",
                  onMouseEnter: (function (param) {
                      return Curry._1(setTileState, (function (param) {
                                    return /* Words */0;
                                  }));
                    }),
                  onMouseLeave: (function (param) {
                      return Curry._1(setTileState, (function (param) {
                                    return /* Image */1;
                                  }));
                    })
                }, React.createElement("div", undefined, match[0] ? renderImageJsx(undefined) : renderWordsJsx(undefined)), React.createElement("div", {
                      className: "px-6 py-4"
                    }, React.createElement("span", {
                          className: "inline-block bg-red rounded-full px-3 py-1 text-sm font-semibold text-champagne mr-2"
                        }, "#photography"), React.createElement("span", {
                          className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                        }, "#travel"), React.createElement("span", {
                          className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                        }, "#winter"))));
}

var Link;

var $$Image;

var make = FaveTile;

var $$default = FaveTile;

exports.Link = Link;
exports.$$Image = $$Image;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
