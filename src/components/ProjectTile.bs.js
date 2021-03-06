// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function ProjectTile(Props) {
  var post = Props.post;
  var possNullExternal = post.frontmatter.ext;
  var renderContentJsx = function (param) {
    return React.createElement("div", {
                className: "flex flex-col justify-centers items-center"
              }, React.createElement("div", {
                    className: "flex flex-row justify-center "
                  }, React.createElement("div", {
                        className: "font-roboto text-2xl mb-2 text-cadet"
                      }, post.frontmatter.title), React.createElement("div", undefined, (possNullExternal == null) ? null : React.createElement("a", {
                              href: possNullExternal,
                              rel: "noopener noreferrer",
                              target: "_blank"
                            }, React.createElement("svg", {
                                  className: "fill-current text-cadet hover:text-celadon-green",
                                  height: "30",
                                  width: "30",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, React.createElement("path", {
                                      className: "heroicon-ui",
                                      d: "M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
                                    }))))), React.createElement("p", {
                    className: "font-roboto text-base text-cadet"
                  }, post.excerpt));
  };
  return React.createElement("div", {
              className: "sm:w-1/3 mt-4"
            }, React.createElement("div", {
                  className: "bg-white h-full p-8  border-2 border-b-8 border-cadet rounded-lg flex flex-col justify-center items-center sm:mx-2 sm:p-3 md:p-8"
                }, React.createElement("div", {
                      className: "px-6 py-4"
                    }, renderContentJsx(undefined)), React.createElement("div", {
                      className: "px-6 py-"
                    }, Belt_Array.map(post.frontmatter.tech, (function (item) {
                            return React.createElement("span", {
                                        key: item,
                                        className: " font-roboto inline-block bg-cadet rounded-full px-3 py-1 mt-1 text-sm font-semibold text-white mr-2 b"
                                      }, item);
                          })))));
}

var Link;

var make = ProjectTile;

var $$default = ProjectTile;

exports.Link = Link;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* react Not a pure module */
