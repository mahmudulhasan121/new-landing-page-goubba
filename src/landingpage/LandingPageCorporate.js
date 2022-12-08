import "./App.css";
import Lottie from "lottie-react";
import WelcomeMemeberShip from "./WelcomeMemebership.js";
import { useTranslation, Trans } from "react-i18next";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Question from "../components/Question";
const animation1 = {
  v: "5.8.1",
  fr: 60,
  ip: 0,
  op: 120,
  w: 800,
  h: 264,
  nm: "export",
  ddd: 0,
  assets: [
    {
      id: "comp_0",
      nm: "1",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shape Layer 6",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [402.375, 227, 0], ix: 2, l: 2 },
            a: { a: 0, k: [-280.5, 296, 0], ix: 1, l: 2 },
            s: { a: 0, k: [126.923, 126.923, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [13, 13], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 0, ix: 5 },
                  lc: 1,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.380392156863, 0.380392156863, 0.380392156863, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 56, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [-280.5, 296], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Ellipse 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Shape Layer 5",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400.625, 223.337, 0], ix: 2, l: 2 },
            a: { a: 0, k: [-294.75, 344.75, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 112.426, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [128.5, 17.5], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 0, ix: 5 },
                  lc: 1,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [-294.75, 344.75], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Rectangle 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 5,
          ty: 0,
          nm: "Gift 15",
          parent: 6,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: -12,
          op: 288,
          st: -12,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 6,
          ty: 4,
          nm: "Subtract 7",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.833, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: -12,
                  s: [177.107, 175.527, 0],
                  to: [-0.833, 0, 0],
                  ti: [-34.873, -13.15, 0],
                },
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: -9,
                  s: [133.107, 157.527, 0],
                  to: [90.167, 34, 0],
                  ti: [-49.458, 3.542, 0],
                },
                { t: 26, s: [429.857, 136.277, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: -9,
                  s: [100, 100, 100],
                },
                { t: 26, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          ef: [
            {
              ty: 25,
              nm: "Drop Shadow",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 31.5, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 4, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 48, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -19,
          op: 281,
          st: -19,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 7,
          ty: 0,
          nm: "Gift 15",
          parent: 8,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: -3,
          op: 297,
          st: -3,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 8,
          ty: 4,
          nm: "Subtract 6",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.833, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: -3,
                  s: [100.107, 177.527, 0],
                  to: [4, -1.5, 0],
                  ti: [-34.873, -13.15, 0],
                },
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 0,
                  s: [133.107, 157.527, 0],
                  to: [90.167, 34, 0],
                  ti: [1.25, -86.208, 0],
                },
                { t: 35, s: [371.607, 205.277, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: 0,
                  s: [100, 100, 100],
                },
                { t: 35, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          ef: [
            {
              ty: 25,
              nm: "Drop Shadow",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 31.5, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 4, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 48, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -10,
          op: 290,
          st: -10,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 9,
          ty: 0,
          nm: "Gift 15",
          parent: 10,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: -8,
          op: 292,
          st: -8,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 10,
          ty: 4,
          nm: "Subtract 5",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: -5,
                  s: [133.107, 157.527, 0],
                  to: [104.667, 19, 0],
                  ti: [-5.958, -87.583, 0],
                },
                { t: 30, s: [429.857, 206.027, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: -5,
                  s: [100, 100, 100],
                },
                { t: 30, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          ef: [
            {
              ty: 25,
              nm: "Drop Shadow",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 31.5, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 4, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 48, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -15,
          op: 285,
          st: -15,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 11,
          ty: 0,
          nm: "Gift 15",
          parent: 12,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 12,
          ty: 4,
          nm: "Subtract 4",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 3,
                  s: [133.107, 157.527, 0],
                  to: [90.167, 34, 0],
                  ti: [-39.75, 3.542, 0],
                },
                { t: 38, s: [371.607, 136.277, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: 3,
                  s: [100, 100, 100],
                },
                { t: 38, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          ef: [
            {
              ty: 25,
              nm: "Drop Shadow",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 31.5, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 4, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 48, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -7,
          op: 293,
          st: -7,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 13,
          ty: 0,
          nm: "Gift 15",
          parent: 14,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 14,
          ty: 4,
          nm: "Subtract 3",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 3,
                  s: [186.607, 146.027, 0],
                  to: [90.167, 34, 0],
                  ti: [-40.5, 13.167, 0],
                },
                { t: 33, s: [429.607, 67.027, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: 3,
                  s: [100, 100, 100],
                },
                { t: 33, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          ef: [
            {
              ty: 25,
              nm: "Drop Shadow",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 98.5, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 5, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 0, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
            {
              ty: 25,
              nm: "Drop Shadow 2",
              np: 8,
              mn: "ADBE Drop Shadow",
              ix: 2,
              en: 1,
              ef: [
                {
                  ty: 2,
                  nm: "Shadow Color",
                  mn: "ADBE Drop Shadow-0001",
                  ix: 1,
                  v: { a: 0, k: [0, 0, 0, 1], ix: 1 },
                },
                {
                  ty: 0,
                  nm: "Opacity",
                  mn: "ADBE Drop Shadow-0002",
                  ix: 2,
                  v: { a: 0, k: 47, ix: 2 },
                },
                {
                  ty: 0,
                  nm: "Direction",
                  mn: "ADBE Drop Shadow-0003",
                  ix: 3,
                  v: { a: 0, k: 135, ix: 3 },
                },
                {
                  ty: 0,
                  nm: "Distance",
                  mn: "ADBE Drop Shadow-0004",
                  ix: 4,
                  v: { a: 0, k: 4, ix: 4 },
                },
                {
                  ty: 0,
                  nm: "Softness",
                  mn: "ADBE Drop Shadow-0005",
                  ix: 5,
                  v: { a: 0, k: 20, ix: 5 },
                },
                {
                  ty: 7,
                  nm: "Shadow Only",
                  mn: "ADBE Drop Shadow-0006",
                  ix: 6,
                  v: { a: 0, k: 0, ix: 6 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: -7,
          op: 293,
          st: -7,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 15,
          ty: 0,
          nm: "Gift 15",
          parent: 16,
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [711.259, 51.623, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 16,
          ty: 4,
          nm: "Subtract",
          parent: 44,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 0,
                  s: [-115.393, 63.027, 0],
                  to: [90.167, 34, 0],
                  ti: [-44.5, 6, 0],
                },
                { t: 20, s: [151.607, 27.027, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [712, 40, 0], ix: 1, l: 2 },
            s: {
              a: 1,
              k: [
                {
                  i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                  o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                  t: 0,
                  s: [100, 100, 100],
                },
                { t: 20, s: [58.527, 58.527, 100] },
              ],
              ix: 6,
              l: 2,
            },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [89.214, 108.054], ix: 2 },
                  p: { a: 0, k: [712, 40], ix: 3 },
                  r: { a: 0, k: 8, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "rc",
                      d: 1,
                      s: { a: 0, k: [23.827, 7.758], ix: 2 },
                      p: { a: 0, k: [0, 1.662], ix: 3 },
                      r: { a: 0, k: 4, ix: 4 },
                      nm: "Rectangle Path 1",
                      mn: "ADBE Vector Shape - Rect",
                      hd: false,
                    },
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [7.758, 7.758], ix: 2 },
                      p: { a: 0, k: [-0.277, -1.662], ix: 3 },
                      nm: "Ellipse Path 1",
                      mn: "ADBE Vector Shape - Ellipse",
                      hd: false,
                    },
                    {
                      ty: "mm",
                      mm: 1,
                      nm: "Merge Paths 1",
                      mn: "ADBE Vector Filter - Merge",
                      hd: false,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [712, -2.39], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 0.988235294819, 0.996078431606, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 42,
          ty: 4,
          nm: "Subtract",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400.5, 129, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [135, 224], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 5, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [123, 206], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 2",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 43,
          ty: 3,
          nm: "▽ Group 34514",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [264.607, 94.027, 0], ix: 2, l: 2 },
            a: { a: 0, k: [44.607, 54.027, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 44,
          ty: 3,
          nm: "▽ Group 34483",
          parent: 43,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [44.607, 54.027, 0], ix: 2, l: 2 },
            a: { a: 0, k: [44.607, 54.027, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 45,
          ty: 4,
          nm: "Subtract",
          parent: 44,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [0, 74.807, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "gr",
                  it: [
                    {
                      ty: "tr",
                      p: { a: 0, k: [-11.914, -82.011], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transform",
                    },
                  ],
                  nm: "Union",
                  np: 0,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 3,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Subtract",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 46,
          ty: 4,
          nm: "Vector 553",
          parent: 50,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 7,
                  s: [-0.333, 6.03, 0],
                  to: [0, -0.167, 0],
                  ti: [0, 0.167, 0],
                },
                { t: 37, s: [-0.333, 5.03, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 1,
                    k: [
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 7,
                        s: [
                          {
                            i: [
                              [0, 0],
                              [8, -5.5],
                            ],
                            o: [
                              [-5.833, -5],
                              [0, 0],
                            ],
                            v: [
                              [11.667, 1.97],
                              [-11.667, 1.97],
                            ],
                            c: false,
                          },
                        ],
                      },
                      {
                        t: 37,
                        s: [
                          {
                            i: [
                              [0, 0],
                              [7.75, 6.25],
                            ],
                            o: [
                              [-9.333, 7.25],
                              [0, 0],
                            ],
                            v: [
                              [11.667, 1.97],
                              [-11.667, 1.97],
                            ],
                            c: false,
                          },
                        ],
                      },
                    ],
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 3 },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 5.163, ix: 5 },
                  lc: 1,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Vector 553",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 48,
          ty: 4,
          nm: "Ellipse 957",
          parent: 50,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7.559, -7.39, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [6.553, 6.553], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Ellipse 957",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 49,
          ty: 4,
          nm: "Ellipse 956",
          parent: 50,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [-7.93, -7.39, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [6.553, 6.553], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Ellipse 956",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 50,
          ty: 4,
          nm: "Ellipse 962",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: {
              a: 1,
              k: [
                {
                  i: { x: 0.667, y: 1 },
                  o: { x: 0.333, y: 0 },
                  t: 7,
                  s: [509, 222, 0],
                  to: [0, -31.667, 0],
                  ti: [0, 31.667, 0],
                },
                { t: 37, s: [509, 32, 0] },
              ],
              ix: 2,
              l: 2,
            },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [48, 48], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.667], y: [1] },
                        o: { x: [0.333], y: [0] },
                        t: 7,
                        s: [0, 0, 0, 1],
                      },
                      {
                        t: 37,
                        s: [0.747451004328, 0.260875058642, 0.59029600854, 1],
                      },
                    ],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Ellipse 962",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 51,
          ty: 4,
          nm: "Rectangle 5070",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [509, 129, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [12, 224], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 50, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.218823522329, 0.029411764815, 0.157647058368, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Rectangle 5070",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 52,
          ty: 4,
          nm: "Rectangle 5055",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 132, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [1784, 264], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.072941176593, 0.009803921916, 0.052549019456, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Rectangle 5055",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_1",
      nm: "Gift 15",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "Gift 16",
          refId: "comp_2",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 23.314, 0], ix: 2, l: 2 },
            a: { a: 0, k: [23.5, 23.5, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 47,
          h: 47,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Gift",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 23.314, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [46.627, 46.627], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Gift",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_2",
      nm: "Gift 16",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Path 31",
          sr: 1,
          ks: {
            o: { a: 0, k: 30, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 7.967, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.595, 0.893],
                        [0.893, -0.595],
                        [0, 0],
                        [0, 0],
                        [0.595, -0.893],
                        [-0.893, -0.595],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [-0.595, -0.893],
                        [0, 0],
                        [0, 0],
                        [-0.893, -0.595],
                        [-0.595, 0.893],
                        [0, 0],
                        [0, 0],
                        [0.893, -0.595],
                      ],
                      v: [
                        [7.445, -3.216],
                        [4.751, -3.755],
                        [0, -0.588],
                        [-4.751, -3.755],
                        [-7.445, -3.216],
                        [-6.906, -0.522],
                        [0, 4.082],
                        [6.906, -0.522],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Path 31",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Combined Shape",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 25.256, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [34.97, 5.828], ix: 2 },
                  p: { a: 0, k: [0, -10.685], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [13.6, 17.485], ix: 2 },
                  p: { a: 0, k: [-8.742, 4.857], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 2",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [13.6, 17.485], ix: 2 },
                  p: { a: 0, k: [8.743, 4.857], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 3",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Combined Shape",
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "bound",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 23.314, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [46.627, 46.627], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "bound",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Gift",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [23.314, 23.314, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [46.627, 46.627], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Gift",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
  ],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 0,
      nm: "slow",
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [400, 132, 0], ix: 2, l: 2 },
        a: { a: 0, k: [400, 132, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      tm: {
        a: 1,
        k: [
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            t: 0,
            s: [0],
          },
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            t: 119,
            s: [0.908],
          },
          { t: 303, s: [5] },
        ],
        ix: 2,
      },
      w: 800,
      h: 264,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

const animation2 = {
  v: "5.8.1",
  fr: 60,
  ip: 0,
  op: 212,
  w: 841,
  h: 874,
  nm: "2",
  ddd: 0,
  assets: [
    {
      id: "comp_0",
      nm: "Gift 17",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "Gift 18",
          refId: "comp_1",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.028, 17.028, 0], ix: 2, l: 2 },
            a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 34,
          h: 34,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Gift",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.028, 17.028, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [34.057, 34.057], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Gift",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_1",
      nm: "Gift 18",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Path 31",
          sr: 1,
          ks: {
            o: { a: 0, k: 30, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.028, 5.819, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.435, 0.652],
                        [0.652, -0.435],
                        [0, 0],
                        [0, 0],
                        [0.435, -0.652],
                        [-0.652, -0.435],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [-0.435, -0.652],
                        [0, 0],
                        [0, 0],
                        [-0.652, -0.435],
                        [-0.435, 0.652],
                        [0, 0],
                        [0, 0],
                        [0.652, -0.435],
                      ],
                      v: [
                        [5.438, -2.349],
                        [3.47, -2.743],
                        [0, -0.43],
                        [-3.47, -2.743],
                        [-5.438, -2.349],
                        [-5.044, -0.381],
                        [0, 2.981],
                        [5.044, -0.381],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Path 31",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Combined Shape",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.029, 18.447, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [25.543, 4.257], ix: 2 },
                  p: { a: 0, k: [0, -7.805], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [9.933, 12.771], ix: 2 },
                  p: { a: 0, k: [-6.385, 3.548], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 2",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [9.933, 12.771], ix: 2 },
                  p: { a: 0, k: [6.386, 3.548], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 3",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Combined Shape",
              np: 5,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "bound",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.028, 17.028, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [34.057, 34.057], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "bound",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Gift",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [17.028, 17.028, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [34.057, 34.057], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Gift",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_2",
      nm: "G Logo",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "Logo Mother",
          refId: "comp_3",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8, 0], ix: 2, l: 2 },
            a: { a: 0, k: [30, 8, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 60,
          h: 16,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "G Logo",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [59.6, 16], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "G Logo",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_3",
      nm: "Logo Mother",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "container",
          refId: "comp_4",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [30, 8, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 60,
          h: 16,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Logo Mother",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [59.6, 16], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Logo Mother",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_4",
      nm: "container",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "Goubba business",
          refId: "comp_5",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [30, 8, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 60,
          h: 16,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "container",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [59.6, 16.14], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "container",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_5",
      nm: "Goubba business",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 3,
          nm: "▽ Group 34109",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7.991, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [7.991, 8.07, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Vector",
          parent: 1,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [8.821, 7.825, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.006, -0.077],
                        [0, 0],
                        [0, -0.058],
                        [0, -0.029],
                        [0, -0.029],
                        [0.004, -0.057],
                        [0.004, -0.038],
                        [0.012, -0.075],
                        [0.004, -0.022],
                        [0.007, -0.033],
                        [0.004, -0.019],
                        [0.004, -0.018],
                        [0, 0],
                        [0.005, -0.019],
                        [0.01, -0.036],
                        [0.025, -0.07],
                        [0.006, -0.017],
                        [0.046, -0.099],
                        [0, 0],
                        [0.082, 0.068],
                        [0, 0],
                        [0.026, 0.054],
                        [0.001, 0.059],
                        [-0.023, 0.055],
                        [-0.044, 0.04],
                        [0, 0],
                        [-0.106, 0.002],
                        [0, 0],
                        [-0.008, -0.016],
                        [-0.008, -0.017],
                        [-0.015, -0.034],
                        [-0.006, -0.015],
                        [-0.032, -0.09],
                        [-0.012, -0.036],
                        [-0.006, -0.018],
                        [-0.01, -0.036],
                        [-0.005, -0.018],
                        [0, 0],
                        [-0.004, -0.014],
                        [-0.003, -0.016],
                        [0, -0.008],
                        [-0.004, -0.019],
                        [-0.004, -0.02],
                        [-0.003, -0.02],
                        [-0.003, -0.019],
                        [0, 0],
                        [-0.002, -0.016],
                      ],
                      o: [
                        [0, 0],
                        [0.004, 0.059],
                        [0, 0.029],
                        [0, 0.029],
                        [-0.001, 0.058],
                        [-0.002, 0.038],
                        [-0.007, 0.076],
                        [-0.004, 0.022],
                        [-0.006, 0.034],
                        [-0.004, 0.018],
                        [-0.004, 0.019],
                        [0, 0],
                        [-0.005, 0.019],
                        [-0.01, 0.036],
                        [-0.021, 0.071],
                        [-0.006, 0.017],
                        [-0.038, 0.103],
                        [0, 0],
                        [-0.106, 0.002],
                        [0, 0],
                        [-0.045, -0.038],
                        [-0.026, -0.054],
                        [-0.001, -0.059],
                        [0.023, -0.055],
                        [0, 0],
                        [0.079, -0.071],
                        [0, 0],
                        [0.009, 0.016],
                        [0.008, 0.016],
                        [0.015, 0.033],
                        [0.007, 0.016],
                        [0.038, 0.087],
                        [0.012, 0.035],
                        [0.006, 0.018],
                        [0.011, 0.036],
                        [0.005, 0.018],
                        [0, 0],
                        [0.004, 0.018],
                        [0.004, 0.014],
                        [0.002, 0.008],
                        [0.004, 0.019],
                        [0.004, 0.019],
                        [0.004, 0.02],
                        [0.003, 0.02],
                        [0, 0.002],
                        [0.002, 0.015],
                        [0.01, 0.075],
                      ],
                      v: [
                        [2.36, -0.242],
                        [2.363, -0.202],
                        [2.37, -0.025],
                        [2.37, 0.062],
                        [2.37, 0.148],
                        [2.362, 0.321],
                        [2.353, 0.435],
                        [2.324, 0.661],
                        [2.313, 0.726],
                        [2.294, 0.827],
                        [2.283, 0.881],
                        [2.271, 0.936],
                        [2.258, 0.987],
                        [2.244, 1.045],
                        [2.214, 1.152],
                        [2.146, 1.363],
                        [2.128, 1.415],
                        [2, 1.719],
                        [-0.577, 1.772],
                        [-0.868, 1.669],
                        [-2.221, 0.371],
                        [-2.329, 0.232],
                        [-2.37, 0.061],
                        [-2.336, -0.112],
                        [-2.233, -0.255],
                        [-0.933, -1.608],
                        [-0.646, -1.722],
                        [1.924, -1.772],
                        [1.95, -1.723],
                        [1.974, -1.673],
                        [2.021, -1.573],
                        [2.041, -1.526],
                        [2.146, -1.261],
                        [2.182, -1.155],
                        [2.199, -1.101],
                        [2.231, -0.993],
                        [2.245, -0.938],
                        [2.259, -0.883],
                        [2.272, -0.828],
                        [2.283, -0.781],
                        [2.288, -0.757],
                        [2.299, -0.7],
                        [2.311, -0.64],
                        [2.321, -0.58],
                        [2.33, -0.522],
                        [2.33, -0.517],
                        [2.336, -0.47],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.099, -0.064],
                        [-0.117, 0.002],
                        [-0.109, 0.114],
                        [0.003, 0.158],
                        [0.067, 0.097],
                        [0.109, 0.043],
                        [0.115, -0.025],
                        [0.081, -0.085],
                        [0.021, -0.116],
                        [-0.047, -0.108],
                      ],
                      o: [
                        [0.099, 0.064],
                        [0.157, -0.003],
                        [0.109, -0.114],
                        [-0.002, -0.118],
                        [-0.067, -0.097],
                        [-0.109, -0.043],
                        [-0.115, 0.025],
                        [-0.081, 0.085],
                        [-0.021, 0.116],
                        [0.047, 0.108],
                      ],
                      v: [
                        [-0.96, 0.536],
                        [-0.629, 0.63],
                        [-0.213, 0.447],
                        [-0.047, 0.022],
                        [-0.154, -0.307],
                        [-0.424, -0.521],
                        [-0.768, -0.548],
                        [-1.068, -0.379],
                        [-1.225, -0.07],
                        [-1.184, 0.273],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.996078431606, 0.360784322023, 0.32549020648, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Vector",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "Vector",
          parent: 1,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [12.695, 7.764, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, -0.002],
                        [-0.03, -0.222],
                        [-0.005, -0.279],
                        [0, -0.067],
                        [0, 0],
                        [0, -0.056],
                        [0, 0],
                        [0.005, -0.053],
                        [0, 0],
                        [0.008, -0.058],
                        [0, -0.002],
                        [0.011, -0.064],
                        [0, 0],
                        [0.006, -0.03],
                        [0, -0.004],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.013, 0.597],
                        [0.281, 0.528],
                        [0, 0],
                        [0, 0],
                        [-0.051, -0.04],
                        [-0.016, -0.063],
                      ],
                      o: [
                        [0.051, 0.218],
                        [0.037, 0.277],
                        [0, 0.066],
                        [0, 0],
                        [0, 0.055],
                        [0, 0],
                        [-0.003, 0.053],
                        [0, 0],
                        [-0.006, 0.059],
                        [0, 0.002],
                        [-0.009, 0.065],
                        [0, 0],
                        [-0.006, 0.031],
                        [-0.002, 0.003],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.257, -0.54],
                        [-0.013, -0.597],
                        [0, 0],
                        [0, 0],
                        [0.065, 0.001],
                        [0.051, 0.04],
                        [0, 0.002],
                      ],
                      v: [
                        [1.773, -1.523],
                        [1.894, -0.862],
                        [1.958, -0.026],
                        [1.958, 0.173],
                        [1.958, 0.19],
                        [1.954, 0.357],
                        [1.947, 0.524],
                        [1.936, 0.682],
                        [1.914, 0.92],
                        [1.892, 1.096],
                        [1.892, 1.103],
                        [1.862, 1.298],
                        [1.826, 1.499],
                        [1.808, 1.59],
                        [1.806, 1.6],
                        [1.789, 1.683],
                        [-1.637, 1.748],
                        [-1.725, 1.748],
                        [-1.881, 1.751],
                        [-1.51, 0.023],
                        [-1.958, -1.688],
                        [1.456, -1.751],
                        [1.489, -1.751],
                        [1.669, -1.688],
                        [1.773, -1.53],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.458823531866, 0.023529412225, 0.396078437567, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1.326, ix: 5 },
                  lc: 1,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.458823531866, 0.023529412225, 0.396078437567, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Vector",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Ellipse 929 (Stroke)",
          parent: 1,
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7.991, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [-100, -100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.327, 0.553],
                        [1.39, -0.368],
                        [0.879, -1.137],
                        [0.006, -1.437],
                        [-0.87, -1.145],
                        [-1.386, -0.38],
                        [0, 0],
                        [0.415, 0.546],
                        [-0.003, 0.685],
                        [-0.419, 0.542],
                        [-0.662, 0.176],
                        [-0.633, -0.264],
                        [-0.342, -0.594],
                        [0.09, -0.679],
                        [0.485, -0.485],
                        [0, 0],
                        [-0.189, 1.425],
                        [0.717, 1.246],
                      ],
                      o: [
                        [-1.327, -0.553],
                        [-1.39, 0.368],
                        [-0.879, 1.137],
                        [-0.006, 1.437],
                        [0.87, 1.145],
                        [0, 0],
                        [-0.661, -0.181],
                        [-0.415, -0.546],
                        [0.003, -0.685],
                        [0.419, -0.542],
                        [0.662, -0.176],
                        [0.633, 0.264],
                        [0.342, 0.594],
                        [-0.09, 0.679],
                        [0, 0],
                        [1.016, -1.016],
                        [0.189, -1.425],
                        [-0.717, -1.246],
                      ],
                      v: [
                        [2.514, -5.918],
                        [-1.674, -6.203],
                        [-5.172, -3.881],
                        [-6.537, 0.089],
                        [-5.205, 4.071],
                        [-1.727, 6.421],
                        [-0.823, 3.122],
                        [-2.482, 2.001],
                        [-3.117, 0.103],
                        [-2.466, -1.79],
                        [-0.798, -2.896],
                        [1.199, -2.761],
                        [2.701, -1.438],
                        [3.09, 0.525],
                        [2.204, 2.32],
                        [4.622, 4.739],
                        [6.481, 0.974],
                        [5.666, -3.145],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 73.787, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Ellipse 929 (Stroke)",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 5,
          ty: 4,
          nm: "Vector",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [37.413, 8.462, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.623, -0.36],
                        [-0.797, 0],
                        [-0.64, 0.371],
                        [-0.351, 0.63],
                        [0.008, 0.735],
                        [0.358, 0.639],
                        [0.626, 0.361],
                        [0.807, 0],
                        [0.635, -0.372],
                        [0.347, -0.632],
                        [-0.001, -0.732],
                        [-0.349, -0.643],
                      ],
                      o: [
                        [0.633, 0.371],
                        [0.812, 0],
                        [0.627, -0.357],
                        [0.357, -0.642],
                        [0.007, -0.732],
                        [-0.352, -0.631],
                        [-0.638, -0.373],
                        [-0.802, 0],
                        [-0.624, 0.361],
                        [-0.348, 0.644],
                        [0.001, 0.732],
                        [0.348, 0.63],
                      ],
                      v: [
                        [-20.171, 4.895],
                        [-18.026, 5.451],
                        [-15.848, 4.895],
                        [-14.354, 3.386],
                        [-13.82, 1.284],
                        [-14.356, -0.808],
                        [-15.85, -2.325],
                        [-18.018, -2.885],
                        [-20.174, -2.327],
                        [-21.658, -0.81],
                        [-22.188, 1.287],
                        [-21.654, 3.382],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.283, -0.172],
                        [0.34, 0.006],
                        [0, 0],
                        [0.295, 0.171],
                        [0.149, 0.297],
                        [-0.007, 0.365],
                        [-0.164, 0.325],
                        [-0.285, 0.171],
                        [-0.342, -0.006],
                        [-0.293, -0.174],
                        [-0.152, -0.295],
                        [0.007, -0.364],
                        [0.166, -0.324],
                      ],
                      o: [
                        [-0.293, 0.174],
                        [0, 0],
                        [-0.341, 0.006],
                        [-0.286, -0.17],
                        [-0.163, -0.326],
                        [-0.007, -0.363],
                        [0.15, -0.296],
                        [0.294, -0.174],
                        [0.34, -0.006],
                        [0.283, 0.172],
                        [0.166, 0.324],
                        [0.007, 0.364],
                        [-0.152, 0.295],
                      ],
                      v: [
                        [-17.034, 3.045],
                        [-18.003, 3.302],
                        [-18.003, 3.302],
                        [-18.975, 3.05],
                        [-19.641, 2.334],
                        [-19.879, 1.282],
                        [-19.641, 0.235],
                        [-18.975, -0.48],
                        [-18.003, -0.738],
                        [-17.034, -0.48],
                        [-16.369, 0.235],
                        [-16.127, 1.282],
                        [-16.369, 2.33],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 2,
                  ty: "sh",
                  ix: 3,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.565, -0.262],
                        [-0.737, 0],
                        [0, 0],
                        [-0.565, 0.262],
                        [-0.328, 0.583],
                        [0, 0.913],
                        [0, 0],
                        [0, 0],
                        [0.13, -0.054],
                        [0.1, -0.1],
                        [0.054, -0.13],
                        [0, -0.141],
                        [0, 0],
                        [0.103, -0.27],
                        [0.224, -0.151],
                        [0.338, 0],
                        [0.24, 0.312],
                        [0, 0.596],
                        [0, 0],
                        [0, 0],
                        [0.13, -0.054],
                        [0.1, -0.1],
                        [0.054, -0.13],
                        [0, -0.141],
                        [0, 0],
                        [-0.328, -0.582],
                      ],
                      o: [
                        [0.565, 0.262],
                        [0, 0],
                        [0.735, 0],
                        [0.565, -0.262],
                        [0.328, -0.583],
                        [0, 0],
                        [0, 0],
                        [-0.141, 0],
                        [-0.13, 0.054],
                        [-0.1, 0.1],
                        [-0.054, 0.13],
                        [0, 0],
                        [0, 0.39],
                        [-0.091, 0.254],
                        [-0.219, 0.146],
                        [-0.499, 0],
                        [-0.24, -0.312],
                        [0, 0],
                        [0, 0],
                        [-0.141, 0],
                        [-0.13, 0.054],
                        [-0.1, 0.1],
                        [-0.054, 0.13],
                        [0, 0],
                        [0, 0.913],
                        [0.329, 0.582],
                      ],
                      v: [
                        [-11.218, 5.058],
                        [-9.266, 5.451],
                        [-9.268, 5.451],
                        [-7.317, 5.058],
                        [-5.977, 3.79],
                        [-5.486, 1.547],
                        [-5.486, -2.637],
                        [-6.718, -2.637],
                        [-7.129, -2.556],
                        [-7.478, -2.322],
                        [-7.711, -1.973],
                        [-7.792, -1.562],
                        [-7.792, 1.47],
                        [-7.947, 2.459],
                        [-8.432, 3.083],
                        [-9.268, 3.302],
                        [-10.376, 2.833],
                        [-10.736, 1.471],
                        [-10.736, -2.637],
                        [-11.976, -2.637],
                        [-12.387, -2.556],
                        [-12.736, -2.322],
                        [-12.969, -1.973],
                        [-13.051, -1.562],
                        [-13.051, 1.548],
                        [-12.559, 3.792],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 3",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 3,
                  ty: "sh",
                  ix: 4,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.3, -0.098],
                        [-0.322, 0.001],
                        [0, 0],
                        [-0.571, 0.375],
                        [-0.301, 0.616],
                        [0, 0.762],
                        [0.323, 0.648],
                        [0.574, 0.375],
                        [0.732, 0],
                        [0.29, -0.091],
                        [0.244, -0.176],
                        [0.165, -0.25],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.202, -0.202],
                        [0, -0.286],
                        [0, 0],
                        [-0.121, -0.121],
                        [-0.171, 0],
                        [0, 0],
                        [0, 0],
                        [-0.244, -0.183],
                      ],
                      o: [
                        [0.306, 0.101],
                        [0, 0],
                        [0.711, 0],
                        [0.573, -0.377],
                        [0.32, -0.638],
                        [0.007, -0.724],
                        [-0.303, -0.615],
                        [-0.572, -0.373],
                        [-0.304, -0.001],
                        [-0.287, 0.089],
                        [-0.244, 0.175],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-0.286, 0],
                        [-0.202, 0.202],
                        [0, 0],
                        [0, 0.171],
                        [0.121, 0.121],
                        [0, 0],
                        [0, 0],
                        [0.169, 0.255],
                        [0.251, 0.19],
                      ],
                      v: [
                        [-0.723, 5.307],
                        [0.225, 5.459],
                        [0.224, 5.459],
                        [2.147, 4.897],
                        [3.483, 3.38],
                        [3.963, 1.28],
                        [3.483, -0.808],
                        [2.143, -2.321],
                        [0.187, -2.881],
                        [-0.709, -2.745],
                        [-1.511, -2.344],
                        [-2.129, -1.701],
                        [-2.076, -2.69],
                        [-2.076, -5.459],
                        [-3.329, -5.459],
                        [-4.091, -5.143],
                        [-4.407, -4.381],
                        [-4.407, 4.556],
                        [-4.218, 5.011],
                        [-3.763, 5.199],
                        [-2.179, 5.199],
                        [-2.179, 4.21],
                        [-1.555, 4.872],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 4",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 4,
                  ty: "sh",
                  ix: 5,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.291, -0.163],
                        [0.328, 0.002],
                        [0, 0],
                        [0.282, 0.173],
                        [0.162, 0.297],
                        [0.001, 0.361],
                        [-0.165, 0.321],
                        [-0.285, 0.182],
                        [-0.334, -0.003],
                        [-0.293, -0.166],
                        [-0.156, -0.294],
                        [0, -0.412],
                        [0.169, -0.308],
                      ],
                      o: [
                        [-0.287, 0.159],
                        [0, 0],
                        [-0.331, 0.001],
                        [-0.289, -0.176],
                        [-0.168, -0.32],
                        [-0.001, -0.361],
                        [0.159, -0.299],
                        [0.281, -0.18],
                        [0.336, -0.004],
                        [0.289, 0.165],
                        [0.166, 0.307],
                        [0, 0.424],
                        [-0.156, 0.295],
                      ],
                      v: [
                        [0.723, 3.079],
                        [-0.215, 3.318],
                        [-0.215, 3.318],
                        [-1.153, 3.054],
                        [-1.842, 2.332],
                        [-2.099, 1.296],
                        [-1.849, 0.258],
                        [-1.172, -0.475],
                        [-0.23, -0.747],
                        [0.73, -0.5],
                        [1.411, 0.203],
                        [1.661, 1.281],
                        [1.408, 2.379],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 5",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 5,
                  ty: "sh",
                  ix: 6,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.3, -0.098],
                        [-0.322, 0.001],
                        [-0.571, 0.375],
                        [-0.301, 0.616],
                        [0, 0.762],
                        [0.323, 0.648],
                        [0.574, 0.375],
                        [0.732, 0],
                        [0.29, -0.091],
                        [0.244, -0.176],
                        [0.165, -0.25],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.202, -0.202],
                        [0, -0.286],
                        [0, 0],
                        [-0.032, -0.078],
                        [-0.06, -0.06],
                        [-0.078, -0.032],
                        [-0.085, 0],
                        [0, 0],
                        [0, 0],
                        [-0.244, -0.183],
                      ],
                      o: [
                        [0.306, 0.101],
                        [0.711, 0],
                        [0.573, -0.377],
                        [0.32, -0.638],
                        [0.007, -0.724],
                        [-0.302, -0.616],
                        [-0.572, -0.373],
                        [-0.304, -0.001],
                        [-0.287, 0.089],
                        [-0.244, 0.175],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-0.286, 0],
                        [-0.202, 0.202],
                        [0, 0],
                        [0, 0.085],
                        [0.032, 0.078],
                        [0.06, 0.06],
                        [0.078, 0.032],
                        [0, 0],
                        [0, 0],
                        [0.169, 0.255],
                        [0.251, 0.19],
                      ],
                      v: [
                        [8.465, 5.307],
                        [9.412, 5.459],
                        [11.335, 4.897],
                        [12.671, 3.38],
                        [13.151, 1.28],
                        [12.671, -0.808],
                        [11.332, -2.321],
                        [9.376, -2.881],
                        [8.479, -2.745],
                        [7.677, -2.344],
                        [7.059, -1.701],
                        [7.112, -2.69],
                        [7.112, -5.459],
                        [5.86, -5.459],
                        [5.098, -5.143],
                        [4.782, -4.381],
                        [4.782, 4.556],
                        [4.831, 4.802],
                        [4.971, 5.011],
                        [5.179, 5.15],
                        [5.426, 5.199],
                        [7.008, 5.199],
                        [7.008, 4.21],
                        [7.633, 4.872],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 6",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 6,
                  ty: "sh",
                  ix: 7,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.291, -0.163],
                        [0.328, 0.002],
                        [0.282, 0.173],
                        [0.162, 0.297],
                        [0.001, 0.361],
                        [-0.165, 0.321],
                        [-0.285, 0.182],
                        [-0.334, -0.003],
                        [-0.293, -0.166],
                        [-0.156, -0.294],
                        [0, -0.412],
                        [0.168, -0.308],
                      ],
                      o: [
                        [-0.287, 0.159],
                        [-0.331, 0.001],
                        [-0.289, -0.176],
                        [-0.168, -0.32],
                        [-0.001, -0.361],
                        [0.159, -0.299],
                        [0.281, -0.18],
                        [0.337, -0.004],
                        [0.289, 0.166],
                        [0.166, 0.307],
                        [-0.001, 0.424],
                        [-0.156, 0.295],
                      ],
                      v: [
                        [9.912, 3.079],
                        [8.974, 3.318],
                        [8.035, 3.054],
                        [7.347, 2.332],
                        [7.089, 1.296],
                        [7.339, 0.258],
                        [8.016, -0.475],
                        [8.958, -0.747],
                        [9.919, -0.5],
                        [10.6, 0.203],
                        [10.85, 1.281],
                        [10.596, 2.379],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 7",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 7,
                  ty: "sh",
                  ix: 8,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.549, -0.373],
                        [-0.661, 0.008],
                        [-0.344, 0.1],
                        [-0.263, 0.192],
                        [-0.157, 0.263],
                        [0, 0],
                        [-0.121, -0.121],
                        [-0.171, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0.078, -0.033],
                        [0.06, -0.06],
                        [0.032, -0.079],
                        [0, -0.085],
                        [0, 0],
                        [0.251, 0.182],
                        [0.315, 0.091],
                        [0.362, -0.003],
                        [0.54, -0.37],
                        [0.312, -0.638],
                        [-0.007, -0.724],
                        [-0.31, -0.638],
                      ],
                      o: [
                        [0.546, 0.372],
                        [0.359, 0.003],
                        [0.313, -0.091],
                        [0.247, -0.181],
                        [0, 0],
                        [0, 0.171],
                        [0.121, 0.121],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [-0.085, 0],
                        [-0.078, 0.033],
                        [-0.06, 0.06],
                        [-0.032, 0.079],
                        [0, 0],
                        [-0.157, -0.267],
                        [-0.266, -0.192],
                        [-0.348, -0.101],
                        [-0.655, -0.007],
                        [-0.548, 0.373],
                        [-0.316, 0.652],
                        [0, 0.762],
                        [0.31, 0.638],
                      ],
                      v: [
                        [15.573, 4.899],
                        [17.428, 5.459],
                        [18.488, 5.311],
                        [19.358, 4.884],
                        [19.971, 4.21],
                        [19.971, 4.558],
                        [20.159, 5.013],
                        [20.614, 5.201],
                        [22.188, 5.201],
                        [22.188, -2.637],
                        [20.625, -2.637],
                        [20.377, -2.587],
                        [20.168, -2.446],
                        [20.029, -2.236],
                        [19.981, -1.988],
                        [19.981, -1.629],
                        [19.362, -2.31],
                        [18.485, -2.737],
                        [17.413, -2.885],
                        [15.577, -2.327],
                        [14.287, -0.81],
                        [13.818, 1.282],
                        [14.283, 3.382],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 8",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 8,
                  ty: "sh",
                  ix: 9,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.289, -0.178],
                        [0.339, 0.004],
                        [0, 0],
                        [0.286, 0.156],
                        [0.155, 0.293],
                        [0, 0.424],
                        [-0.166, 0.306],
                        [-0.29, 0.166],
                        [-0.332, -0.003],
                        [-0.282, -0.18],
                        [-0.159, -0.3],
                        [0.005, -0.356],
                        [0.166, -0.318],
                      ],
                      o: [
                        [-0.289, 0.177],
                        [0, 0],
                        [-0.326, 0.004],
                        [-0.29, -0.161],
                        [-0.169, -0.307],
                        [0, -0.413],
                        [0.156, -0.295],
                        [0.289, -0.165],
                        [0.335, -0.002],
                        [0.287, 0.181],
                        [0.167, 0.314],
                        [0.003, 0.359],
                        [-0.154, 0.302],
                      ],
                      v: [
                        [18.956, 3.045],
                        [17.995, 3.31],
                        [17.996, 3.31],
                        [17.062, 3.077],
                        [16.381, 2.382],
                        [16.127, 1.284],
                        [16.377, 0.206],
                        [17.059, -0.499],
                        [18.007, -0.746],
                        [18.952, -0.474],
                        [19.633, 0.26],
                        [19.881, 1.281],
                        [19.633, 2.311],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 9",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Vector",
              np: 11,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 6,
          ty: 4,
          nm: "Goubba business",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [29.8, 8.07, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [59.6, 16.14], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Goubba business",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_6",
      nm: "Arrow-right",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 0,
          nm: "Arrow-right 2",
          refId: "comp_7",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [7, 7, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          w: 14,
          h: 14,
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Arrow-right",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [14, 14], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Arrow-right",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
    {
      id: "comp_7",
      nm: "Arrow-right 2",
      fr: 60,
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Path 94",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 180, ix: 10 },
            p: { a: 0, k: [10.729, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, -100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.228, -0.228],
                        [-0.228, 0.228],
                        [0, 0],
                        [0, 0],
                        [-0.218, 0.237],
                        [0.237, 0.218],
                        [0, 0],
                        [0.221, -0.221],
                        [0, 0],
                      ],
                      o: [
                        [0.228, 0.228],
                        [0, 0],
                        [0, 0],
                        [0.237, 0.218],
                        [0.218, -0.237],
                        [0, 0],
                        [-0.23, -0.211],
                        [0, 0],
                        [-0.228, 0.228],
                      ],
                      v: [
                        [-3.912, 2.162],
                        [-3.088, 2.162],
                        [0.018, -0.943],
                        [3.106, 1.888],
                        [3.93, 1.853],
                        [3.894, 1.028],
                        [0.394, -2.18],
                        [-0.412, -2.162],
                        [-3.912, 1.338],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: -90, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Path 94",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Rectangle",
          sr: 1,
          ks: {
            o: { a: 0, k: 30, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [1.167, 8.167], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 1, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: -90, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Rectangle",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "Shape",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [7, -7],
                        [-7, -7],
                        [-7, 7],
                        [7, 7],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Shape",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Arrow-right",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [7, 7, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [14, 14], ix: 2 },
                  p: { a: 0, k: [0, 0], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Arrow-right",
              np: 1,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
          ],
          ip: 0,
          op: 300,
          st: 0,
          bm: 0,
        },
      ],
    },
  ],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer 4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [323.5, 783.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-280.5, 296, 0], ix: 1, l: 2 },
        s: { a: 0, k: [126.923, 126.923, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [13, 13], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.380392156863, 0.380392156863, 0.380392156863, 1],
                ix: 4,
              },
              o: { a: 0, k: 56, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-280.5, 296], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Shape Layer 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [321.75, 779.837, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-294.75, 344.75, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 112.426, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [128.5, 17.5], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-294.75, 344.75], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Shape Layer 8",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [716.125, 783.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-280.5, 296, 0], ix: 1, l: 2 },
        s: { a: 0, k: [126.923, 126.923, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [13, 13], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.380392156863, 0.380392156863, 0.380392156863, 1],
                ix: 4,
              },
              o: { a: 0, k: 56, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-280.5, 296], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Shape Layer 7",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [714.375, 779.837, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-294.75, 344.75, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 112.426, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [128.5, 17.5], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-294.75, 344.75], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Shape Layer 6",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [519.875, 783.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-280.5, 296, 0], ix: 1, l: 2 },
        s: { a: 0, k: [126.923, 126.923, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [13, 13], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.380392156863, 0.380392156863, 0.380392156863, 1],
                ix: 4,
              },
              o: { a: 0, k: 56, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-280.5, 296], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Shape Layer 5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [518.125, 779.837, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-294.75, 344.75, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 112.426, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [128.5, 17.5], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-294.75, 344.75], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 4,
      nm: "Shape Layer 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [127.5, 783.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-280.5, 296, 0], ix: 1, l: 2 },
        s: { a: 0, k: [126.923, 126.923, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [13, 13], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.380392156863, 0.380392156863, 0.380392156863, 1],
                ix: 4,
              },
              o: { a: 0, k: 56, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-280.5, 296], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [125.75, 779.837, 0], ix: 2, l: 2 },
        a: { a: 0, k: [-294.75, 344.75, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 112.426, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [128.5, 17.5], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.64463297526, 0.143707006118, 0.712941008923, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 0, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [-294.75, 344.75], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 1",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 4,
      nm: "Subtract",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [714.5, 684, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [135, 224], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [123, 206], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 2",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 4,
      nm: "Subtract",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [518.5, 684, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [135, 224], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [123, 206], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 2",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 11,
      ty: 4,
      nm: "Subtract",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [322.5, 684, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [135, 224], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [123, 206], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 2",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 12,
      ty: 4,
      nm: "Subtract",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [126.5, 684, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [135, 224], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 5, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [123, 206], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 2",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 13,
      ty: 3,
      nm: "▽ Group 34525",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [423.026, 209, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 14,
      ty: 3,
      nm: "▽ Group 34484",
      parent: 13,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 15,
      ty: 4,
      nm: "Subtract",
      parent: 14,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 16,
      ty: 3,
      nm: "▽ Group 34531",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [715.026, 682, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 17,
      ty: 3,
      nm: "▽ Group 34484",
      parent: 16,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 18,
      ty: 4,
      nm: "Subtract",
      parent: 17,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 19,
      ty: 4,
      nm: "Subtract",
      parent: 17,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [682, 642], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [682, 610.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 20,
      ty: 3,
      nm: "▽ Group 34530",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [519.026, 682, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 21,
      ty: 3,
      nm: "▽ Group 34484",
      parent: 20,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 22,
      ty: 4,
      nm: "Subtract",
      parent: 21,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 23,
      ty: 4,
      nm: "Subtract",
      parent: 21,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [486, 642], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [486, 610.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 24,
      ty: 3,
      nm: "▽ Group 34529",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [323.026, 682, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 25,
      ty: 3,
      nm: "▽ Group 34484",
      parent: 24,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 26,
      ty: 4,
      nm: "Subtract",
      parent: 25,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 27,
      ty: 4,
      nm: "Subtract",
      parent: 25,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [290, 642], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [290, 610.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 28,
      ty: 3,
      nm: "▽ Group 34528",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [123.026, 682, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 29,
      ty: 3,
      nm: "▽ Group 34484",
      parent: 28,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 30,
      ty: 4,
      nm: "Subtract",
      parent: 29,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 31,
      ty: 4,
      nm: "Subtract",
      parent: 29,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [90, 642], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [90, 610.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 32,
      ty: 3,
      nm: "▽ Group 34524",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [347.026, 209, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 35,
      ty: 0,
      nm: "Gift 17",
      parent: 36,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 36,
      ty: 4,
      nm: "Subtract 7",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.333, y: 0 },
              t: 20,
              s: [417.776, 204, 0],
              to: [0.667, 28.583, 0],
              ti: [-47.833, -52.417, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 64.666,
              s: [421.776, 375.5, 0],
              to: [47.833, 52.417, 0],
              ti: [-48.667, -44.5, 0],
            },
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.167, y: 0.167 },
              t: 109.334,
              s: [704.776, 518.5, 0],
              to: [48.667, 44.5, 0],
              ti: [-1.5, -20.667, 0],
            },
            { t: 154, s: [713.776, 642.5, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.763137278837, 0.177766074386, 0.574073342716, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 37,
      ty: 0,
      nm: "Gift 17",
      parent: 38,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 38,
      ty: 4,
      nm: "Subtract 6",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.333, y: 0 },
              t: 20,
              s: [344.526, 204.25, 0],
              to: [1.625, 41.042, 0],
              ti: [-27.958, -52.208, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 64.666,
              s: [423.276, 375.5, 0],
              to: [27.958, 52.208, 0],
              ti: [-15.667, -44.5, 0],
            },
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.167, y: 0.167 },
              t: 109.334,
              s: [512.276, 517.5, 0],
              to: [15.667, 44.5, 0],
              ti: [-0.833, -20.833, 0],
            },
            { t: 154, s: [517.276, 642.5, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.763137278837, 0.177766074386, 0.574073342716, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 39,
      ty: 0,
      nm: "Gift 17",
      parent: 40,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 40,
      ty: 4,
      nm: "Subtract 5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.333, y: 0 },
              t: 20,
              s: [417.776, 203.5, 0],
              to: [1.083, 29, 0],
              ti: [15.417, -51.5, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 64.666,
              s: [424.276, 377.5, 0],
              to: [-15.417, 51.5, 0],
              ti: [16.833, -44.167, 0],
            },
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.167, y: 0.167 },
              t: 109.334,
              s: [325.276, 512.5, 0],
              to: [-16.833, 44.167, 0],
              ti: [0.333, -21.667, 0],
            },
            { t: 154, s: [323.276, 642.5, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.763137278837, 0.177766074386, 0.574073342716, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 41,
      ty: 0,
      nm: "Gift 17",
      parent: 42,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 42,
      ty: 4,
      nm: "Subtract 4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.333, y: 0 },
              t: 20,
              s: [344.776, 204, 0],
              to: [5.667, 80, 0],
              ti: [36.25, -52.083, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 64.666,
              s: [422.276, 377.5, 0],
              to: [-36.25, 52.083, 0],
              ti: [49.667, -44.167, 0],
            },
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.167, y: 0.167 },
              t: 109.334,
              s: [127.276, 516.5, 0],
              to: [-49.667, 44.167, 0],
              ti: [0.5, -21, 0],
            },
            { t: 154, s: [124.276, 642.5, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.763137278837, 0.177766074386, 0.574073342716, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 43,
      ty: 0,
      nm: "Gift 17",
      parent: 44,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 44,
      ty: 4,
      nm: "Subtract 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [345.026, 204, 0], ix: 2, l: 2 },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 45,
      ty: 0,
      nm: "Gift 17",
      parent: 46,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 46,
      ty: 4,
      nm: "Subtract 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [418.026, 204, 0], ix: 2, l: 2 },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 47,
      ty: 0,
      nm: "Gift 17",
      parent: 48,
      refId: "comp_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [313.792, 175.864, 0], ix: 2, l: 2 },
        a: { a: 0, k: [17, 17, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 34,
      h: 34,
      ip: -4,
      op: 296,
      st: -4,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 48,
      ty: 4,
      nm: "Subtract",
      parent: 49,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [31.026, 35, 0], ix: 2, l: 2 },
        a: { a: 0, k: [314, 169, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [66.051, 80], ix: 2 },
              p: { a: 0, k: [314, 169], ix: 3 },
              r: { a: 0, k: 6, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [17.641, 5.744], ix: 2 },
                  p: { a: 0, k: [0, 1.231], ix: 3 },
                  r: { a: 0, k: 3, ix: 4 },
                  nm: "Rectangle Path 1",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false,
                },
                {
                  d: 1,
                  ty: "el",
                  s: { a: 0, k: [5.744, 5.744], ix: 2 },
                  p: { a: 0, k: [-0.205, -1.23], ix: 3 },
                  nm: "Ellipse Path 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false,
                },
                {
                  ty: "mm",
                  mm: 1,
                  nm: "Merge Paths 1",
                  mn: "ADBE Vector Filter - Merge",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [314, 137.616], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.729411780834, 0.098039217293, 0.525490224361, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 4,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: -5,
      op: 320,
      st: 20,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 49,
      ty: 3,
      nm: "▽ Group 34483",
      parent: 32,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [33.026, 40, 0], ix: 2, l: 2 },
        a: { a: 0, k: [33.026, 40, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 50,
      ty: 4,
      nm: "Subtract",
      parent: 49,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, 55.385, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ty: "tr",
                  p: { a: 0, k: [-8.821, -60.718], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Union",
              np: 0,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "mm",
              mm: 3,
              nm: "Merge Paths 1",
              mn: "ADBE Vector Filter - Merge",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.129411771894, 0.129411771894, 0.129411771894, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Subtract",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 51,
      ty: 3,
      nm: "▽ Group 34527",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [415, 218, 0], ix: 2, l: 2 },
        a: { a: 0, k: [261, 140, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 52,
      ty: 0,
      nm: "G Logo",
      parent: 51,
      refId: "comp_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [66.8, 46, 0], ix: 2, l: 2 },
        a: { a: 0, k: [30, 8, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 60,
      h: 16,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 53,
      ty: 3,
      nm: "▽ Group 34526",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [249, 196.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [91, 15.5, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 54,
      ty: 4,
      nm: "Rectangle 5079",
      parent: 53,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [91, 29, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [182, 4], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 50, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.329166680574, 0.072690993547, 0.245419561863, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5079",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 55,
      ty: 4,
      nm: "Rectangle 5077",
      parent: 53,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [91, 11, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [182, 4], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 50, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.329166680574, 0.072690993547, 0.245419561863, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5077",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 56,
      ty: 4,
      nm: "Rectangle 5078",
      parent: 53,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [91, 20, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [182, 4], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 50, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.329166680574, 0.072690993547, 0.245419561863, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5078",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 57,
      ty: 4,
      nm: "Rectangle 5076",
      parent: 53,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [91, 2, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [182, 4], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 50, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.329166680574, 0.072690993547, 0.245419561863, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5076",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 58,
      ty: 0,
      nm: "Arrow-right",
      parent: 59,
      refId: "comp_6",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0.5, -0.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [7, 7, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      w: 14,
      h: 14,
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 59,
      ty: 4,
      nm: "Rectangle 5074",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.333, y: 0 },
              t: 0,
              s: [446, 226, 0],
              to: [3, 0, 0],
              ti: [0, 0, 0],
            },
            {
              i: { x: 0.667, y: 1 },
              o: { x: 0.333, y: 0 },
              t: 20,
              s: [464, 226, 0],
              to: [0, 0, 0],
              ti: [3, 0, 0],
            },
            { t: 40, s: [446, 226, 0] },
          ],
          ix: 2,
          l: 2,
        },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 0,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
              o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
              t: 20,
              s: [112, 112, 100],
            },
            { t: 40, s: [100, 100, 100] },
          ],
          ix: 6,
          l: 2,
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [35, 21], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5074",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 60,
      ty: 4,
      nm: "Rectangle 5073",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [316, 159.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [342, 177], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.218823522329, 0.029411764815, 0.157647058368, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5073",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 61,
      ty: 4,
      nm: "Rectangle 5072",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [82, 159.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [100, 177], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.218823522329, 0.029411764815, 0.157647058368, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5072",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 62,
      ty: 4,
      nm: "Rectangle 5071",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [259.5, 46.5, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [455, 29], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: { a: 0, k: [0, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5071",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 63,
      ty: 4,
      nm: "Rectangle 5059",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [261, 140, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [-100, -100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [256, 498], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.04705882445, 0.003921568859, 0.031372550875, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 90, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5059",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 64,
      ty: 4,
      nm: "Rectangle 5058",
      parent: 51,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [261, 140, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [-100, -100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [280, 522], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 10, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.218823522329, 0.029411764815, 0.157647058368, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 90, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5058",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 65,
      ty: 4,
      nm: "Vector 554",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [267.75, 461.75, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 42.5],
                  ],
                  o: [
                    [0, -88],
                    [0, 0],
                  ],
                  v: [
                    [-144.75, 83.75],
                    [144.75, -83.75],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 5, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 10, ix: 1 } },
                { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } },
              ],
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Vector 554",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 66,
      ty: 4,
      nm: "Vector 557",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [369.25, 461.75, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 42.5],
                  ],
                  o: [
                    [0, -88],
                    [0, 0],
                  ],
                  v: [
                    [-43.25, 83.75],
                    [43.25, -83.75],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 5, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 10, ix: 1 } },
                { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } },
              ],
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Vector 557",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 67,
      ty: 4,
      nm: "Vector 556",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [465, 461.75, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 42.5],
                  ],
                  o: [
                    [0, -88],
                    [0, 0],
                  ],
                  v: [
                    [52.5, 83.75],
                    [-52.5, -83.75],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 5, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 10, ix: 1 } },
                { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } },
              ],
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Vector 556",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 68,
      ty: 4,
      nm: "Vector 555",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [557, 461.75, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [
                    [0, 0],
                    [0, 42.5],
                  ],
                  o: [
                    [0, -88],
                    [0, 0],
                  ],
                  v: [
                    [144.5, 83.75],
                    [-144.5, -83.75],
                  ],
                  c: false,
                },
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false,
            },
            {
              ty: "st",
              c: {
                a: 0,
                k: [0.291764706373, 0.039215687662, 0.210196077824, 1],
                ix: 3,
              },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 5, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              d: [
                { n: "d", nm: "dash", v: { a: 0, k: 10, ix: 1 } },
                { n: "g", nm: "gap", v: { a: 0, k: 10, ix: 2 } },
              ],
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Vector 555",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 69,
      ty: 4,
      nm: "Rectangle 5080",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [420.5, 437, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [841, 874], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              r: { a: 0, k: 0, ix: 4 },
              nm: "Rectangle Path 1",
              mn: "ADBE Vector Shape - Rect",
              hd: false,
            },
            {
              ty: "fl",
              c: {
                a: 0,
                k: [0.074509806931, 0.007843137719, 0.050980392843, 1],
                ix: 4,
              },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Rectangle 5080",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 300,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};

const defaultHistory = createBrowserHistory();
function Cards(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
} //<Lottie animationData={animation1} loop={true} className="md:tw-w-1/2 -tw-mx-9 md:tw-mx-auto tw-mb-12" />

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  const numbers = [1];
  return (
    <div className="tw-bg-[#13030D] lg:tw-pt-8 tw-w-full">
      <div className="tw-h-20"></div>
      {/* hero section */}
      <div className=" md:tw-pt-0 md:tw-p-0  tw-rounded-xl md:tw-mx-10 ">
        <div
          className="tw-bg-[#13030D] corporate-shadow  tw-flex tw-justify-center  lg:tw-rounded-xl tw-pt-16 tw-pb-20
                    tw-h-[85vh]"
        >
          <div>
            <div className="tw-flex tw-justify-center tw-mt-12 md:tw-mt-0">
              <img src="https://adminv2.goubba.com/image?path=react-web/assets/corporate-animation-one-croped.gif"></img>
            </div>
            <div className=" tw-mt-24 lg:tw-mt-0">
              <p
                className="sm:tw-w-3/4 tw-mx-auto md:tw-mx-auto tw-text-center tw-font-bold tw-text-white 
                                        tw-text-3xl sm:tw-text-4xl md:tw-text-5xl 2xl:tw-text-7xl tw-z-20 
                                        lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
              >
                <Trans>employee_happiness</Trans>
              </p>
              <div className=" tw-flex tw-gap-4 tw-justify-center tw-mt-12 md:tw-mt-24">
                <a
                  href="https://corporate.goubba.com/login"
                  className="tw-group primary-shadow tw-bg-[#BA1986] tw-flex tw-items-center 
                                    tw-text-left tw-gap-4 tw-text-white tw-rounded-lg tw-px-4 tw-py-1 disabled:tw-opacity-50"
                >
                  <p className="tw-font-bold tw-text-sm tw-text-white">
                    <Trans>login</Trans>
                  </p>
                </a>
                <a
                  href="https://corporate.goubba.com/register"
                  className="tw-group d disabled:tw-opacity-30
                                                tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                                tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 "
                >
                  <p className="tw-font-semibold tw-text-white">
                    <Trans>start_now</Trans>
                  </p>
                  <svg
                    className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                    viewBox="0 0 30 31"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <rect
                      opacity="0.3"
                      x="6.25"
                      y="16.75"
                      width="2.5"
                      height="17.5"
                      rx="1"
                      transform="rotate(-90 6.25 16.75)"
                      fill="white"
                    />{" "}
                    <path
                      d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                      fill="white"
                    />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rwarding */}
      <div
        className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 
                            tw-my-24 md:tw-px-24 tw-mb-12 "
      >
        <div className="tw-flex tw-items-center tw-w-11/12 tw-mx-auto tw-order-1 md:tw-order-1">
          <div className="tw-space-y-12">
            <p
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
            >
              <Trans>reward_employees</Trans>
            </p>

            <div className="tw-flex tw-justify-center md:tw-justify-start">
              <a
                href="https://corporate.goubba.com/register"
                disabled
                className="tw-group tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                            tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 
                                            "
              >
                <p className="tw-font-semibold tw-text-white">
                  <Trans>start_now</Trans>
                </p>
                <svg
                  className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                  viewBox="0 0 30 31"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="white"
                  />{" "}
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="white"
                  />{" "}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-center tw-order-2">
          <img src="https://adminv2.goubba.com/image?path=react-web/assets/corporate-animation-two.gif"></img>
        </div>
      </div>
      {/* exclusive selection */}
      <div
        className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 
                            tw-my-24  tw-mb-12 "
      >
        <div className="tw-flex tw-items-center tw-mx-4 md:tw-mx-auto md:tw-w-11/12 tw-order-1 md:tw-order-1">
          <div className="tw-space-y-12 tw-mx-4 lg:tw-mx-24">
            <p
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
            >
              <Trans>access_exclusive</Trans>
            </p>
            <div className="tw-flex tw-justify-center md:tw-justify-start">
              <a
                href="https://corporate.goubba.com/cards "
                className="tw-group tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                            tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 "
              >
                <p className="tw-font-semibold tw-text-white">
                  <Trans>explore</Trans>
                </p>
                <svg
                  className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                  viewBox="0 0 30 31"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="white"
                  />{" "}
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="white"
                  />{" "}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-justify-center lg:tw-justify-end tw-order-2">
          <img
            className="tw-hidden md:tw-flex"
            src="https://adminv2.goubba.com/image?path=react-web/assets/Frame 37063webp.webp"
            alt=""
          ></img>
          <img
            className="md:tw-hidden"
            src="https://adminv2.goubba.com/image?path=react-web/assets/corporateonemobile.png"
            alt=""
          ></img>
        </div>
      </div>
      {/* cards slider */}
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/profootwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Cazanimowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Camperwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Technowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/footlandwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/sketcherswebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Clarkswebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/airstreetwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Casiowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Eden parkwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Freestylewebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/sneaksawebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/WCwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/profootwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Cazanimowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Camperwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Technowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/footlandwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/sketcherswebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Clarkswebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/airstreetwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Casiowebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Eden parkwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/Freestylewebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/sneaksawebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div className="slide">
            <img
              src="https://adminv2.goubba.com/image?path=react-web/assets/WCwebp.webp"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* explore limitless */}
      <div className="tw-rounded-xl tw-grid md:tw-grid-cols-2 tw-text-white tw-bg-[#0C0108] tw-mx-2 md:tw-mx-10 tw-mt-20 tw-rounded-lg tw-px-8 tw-py-8">
        <div className=" md:tw-w-2/3 tw-mx-6 tw-flex tw-flex-col tw-justify-center">
          <h2
            className=" tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
          >
            <Trans>explore_possibilities</Trans>
          </h2>
          <p className=" tw-hidden md:tw-flex md:tw-text-3xl tw-my-6">
            <Trans>explore_possibilities_txt</Trans>
          </p>
        </div>
        <div className=" tw-mt-12 md:tw-mt-0">
          <img src="https://adminv2.goubba.com/image?path=react-web/assets/infinity.webp"></img>
          <p className="md:tw-hidden tw-text-xl tw-text-center tw-my-12">
            <Trans>explore_possibilities_txt</Trans>
          </p>
        </div>
      </div>
      {/* epmloyees/customers/partners */}
      <div className="tw-bg-[#0C0108] tw-rounded-xl tw-mx-2 md:tw-mx-10">
        <div
          className="tw-flex md:tw-flex-none md:tw-grid   tw-gap-3 tw-grid-cols-3 tw-text-white  tw-mt-10 tw-rounded-lg tw-px-8 tw-py-8
                    tw-overflow-x-auto "
        >
          <div className=" tw-mx-6 ">
            <div>
              <svg
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.8555 45.7799C41.8432 44.4851 38.39 44.7323 35.5929 46.4429L22.6541 54.3555C18.9975 56.5917 17.1493 60.8914 18.043 65.0834L21.2051 79.9165C21.8887 83.1232 24.0856 85.7989 27.0979 87.0936L65.9298 103.785C71.0573 105.988 77.0004 103.618 79.2043 98.491L88.981 75.7452C91.1849 70.6178 88.8149 64.6746 83.6875 62.4707L44.8555 45.7799ZM27.5399 69.2515C30.3599 70.4637 33.6287 69.1602 34.8408 66.3401C36.053 63.52 34.7495 60.2513 31.9294 59.0392C29.1093 57.827 25.8406 59.1305 24.6284 61.9506C23.4163 64.7707 24.7198 68.0394 27.5399 69.2515Z"
                  fill="white"
                  fillOpacity="0.05"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.4665 36.6658C33.1878 36.6658 30.1129 38.2565 28.2186 40.9326L19.4559 53.3115C16.9795 56.81 16.9795 61.49 19.4559 64.9884L28.2186 77.3674C30.1129 80.0435 33.1878 81.6342 36.4665 81.6342H78.7337C84.3146 81.6342 88.8389 77.11 88.8389 71.529V46.771C88.8389 41.1901 84.3146 36.6658 78.7337 36.6658H36.4665ZM34.0186 64.9604C37.0882 64.9604 39.5765 62.472 39.5765 59.4025C39.5765 56.3329 37.0882 53.8446 34.0186 53.8446C30.9491 53.8446 28.4607 56.3329 28.4607 59.4025C28.4607 62.472 30.9491 64.9604 34.0186 64.9604Z"
                  fill="white"
                  fillOpacity="0.25"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.8955 33.7968C25.7908 34.8508 23.3905 37.3456 22.4571 40.4886L18.1391 55.0275C16.9188 59.1363 18.4233 63.5679 21.8929 66.0845L34.17 74.9894C36.8241 76.9145 40.2471 77.4322 43.3518 76.3782L83.3753 62.7903C88.66 60.9962 91.4897 55.2576 89.6956 49.9729L81.7365 26.5292C79.9423 21.2444 74.2037 18.4148 68.919 20.2089L28.8955 33.7968ZM35.6734 61.3771C38.58 60.3903 40.1363 57.2341 39.1495 54.3275C38.1627 51.4209 35.0065 49.8646 32.0999 50.8514C29.1933 51.8382 27.637 54.9944 28.6238 57.901C29.6105 60.8076 32.7668 62.3639 35.6734 61.3771Z"
                  fill="white"
                />{" "}
              </svg>
            </div>
            <h3 className="tw-mr-24 md:tw-mr-0 tw-text-2xl md:tw-text-5xl tw-font-semibold">
              <Trans>employees</Trans>
            </h3>
            <p className=" md:tw-text-2xl tw-mt-6">
              <Trans>emplyees_txt</Trans>
            </p>
          </div>
          <div className=" tw-mx-6">
            <div>
              <svg
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <g clipPath="url(#clip0_1984_62132)">
                  {" "}
                  <path
                    d="M28.9472 98.7432C26.1231 98.8368 23.3292 98.1375 20.8821 96.7247C13.6463 92.547 11.1671 83.2946 15.3447 76.0587L34.8405 42.291C39.0182 35.0551 48.2706 32.5759 55.5065 36.7536C57.9536 38.1664 59.9561 40.2363 61.2871 42.7289L78.3395 74.6614C83.7687 84.8281 76.6471 97.1632 65.1279 97.5447L28.9472 98.7432Z"
                    fill="white"
                    fillOpacity="0.1"
                  />{" "}
                  <path
                    d="M37.9056 78.2578C35.5066 79.7509 32.7374 80.5423 29.9117 80.5423C21.5565 80.5423 14.7832 73.769 14.7832 65.4138L14.7832 26.4221C14.7832 18.0669 21.5565 11.2936 29.9117 11.2936C32.7374 11.2936 35.5066 12.085 37.9056 13.5781L68.6397 32.7063C78.4248 38.7963 78.4248 53.0396 68.6397 59.1296L37.9056 78.2578Z"
                    fill="white"
                  />{" "}
                  <path
                    d="M35.3748 88.1851C32.6711 89.0064 29.7915 89.0541 27.0621 88.3228C18.9915 86.1603 14.2021 77.8647 16.3646 69.7942L26.4564 32.1312C28.6189 24.0606 36.9144 19.2712 44.985 21.4337C47.7144 22.165 50.1844 23.6462 52.1152 25.7093L76.8513 52.1403C84.7268 60.5554 81.0404 74.3133 70.0124 77.6633L35.3748 88.1851Z"
                    fill="white"
                    fillOpacity="0.25"
                  />{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="clip0_1984_62132">
                    {" "}
                    <rect
                      width="113.599"
                      height="113.599"
                      fill="white"
                      transform="translate(0 0.400391)"
                    />{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>
            </div>
            <h3 className="tw-mr-24 md:tw-mr-0 tw-text-2xl md:tw-text-5xl tw-font-semibold">
              <Trans>customers</Trans>
            </h3>
            <p className=" md:tw-text-2xl tw-mt-6">
              <Trans>customers_txt</Trans>
            </p>
          </div>
          <div className=" md:tw-w-full tw-mx-6 ">
            <div>
              <svg
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <circle
                  cx="52.9093"
                  cy="74.3155"
                  r="31.9011"
                  fill="white"
                  fillOpacity="0.1"
                />{" "}
                <circle cx="49.0189" cy="50.9733" r="31.9011" fill="white" />{" "}
                <circle
                  cx="56.7996"
                  cy="60.3102"
                  r="31.9011"
                  fill="white"
                  fillOpacity="0.25"
                />{" "}
              </svg>
            </div>
            <h3 className="tw-mr-24 md:tw-mr-0 tw-text-2xl md:tw-text-5xl tw-font-semibold">
              <Trans>partners</Trans>
            </h3>
            <p className=" md:tw-text-2xl tw-mt-6">
              <Trans>partners_txt</Trans>
            </p>
          </div>
        </div>
        <div className=" tw-flex tw-justify-center tw-mt-4 tw-py-10">
          <a
            href="https://corporate.goubba.com/register"
            className="tw-group  tw-text-lg tw-whitespace-nowrap
                                    tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 tw-rounded-md  
                                    tw-bg-gray-300 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-md tw-bg-opacity-10"
          >
            <p className=" tw-font-semibold tw-text-white">
              <Trans>join</Trans>
            </p>
            <svg
              className=" group-hover:tw-translate-x-3 tw-duration-300 tw-transition tw-w-8"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <rect
                opacity="0.3"
                x="7.5"
                y="19.5"
                width="3"
                height="21"
                rx="1"
                transform="rotate(-90 7.5 19.5)"
                fill="white"
              />{" "}
              <path
                d="M16.9393 25.9393C16.3536 26.5251 16.3536 27.4749 16.9393 28.0607C17.5251 28.6464 18.4749 28.6464 19.0607 28.0607L28.0607 19.0607C28.6285 18.4928 28.6484 17.5784 28.1057 16.9864L19.8557 7.98641C19.2959 7.37574 18.3471 7.33448 17.7364 7.89427C17.1257 8.45406 17.0845 9.40291 17.6443 10.0136L24.9238 17.9549L16.9393 25.9393Z"
                fill="white"
              />{" "}
            </svg>
          </a>
        </div>
      </div>
      {/* huge */}
      <div
        className="tw-grid tw-grid-flow-row md:tw-grid-cols-5
                            tw-my-24 tw-bg-[#25051B] tw-py-16"
      >
        <div className="tw-flex tw-items-center tw-mx-4 md:tw-mx-auto md:tw-w-11/12 tw-order-3 md:tw-order-1 md:tw-col-span-3">
          <div className="tw-space-y-12 tw-mx-4 lg:tw-mx-24">
            <h1
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
            >
              <Trans>huge_flexibility</Trans>
            </h1>
            <div className="tw-flex tw-justify-center md:tw-justify-start">
              <a
                href="https://goubba.com/cards"
                className="tw-group twflex tw-hidden tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                            tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 "
              >
                <p className="tw-font-semibold tw-text-white">
                  <Trans>explore</Trans>
                </p>
                <svg
                  className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                  viewBox="0 0 30 31"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="white"
                  />{" "}
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="white"
                  />{" "}
                </svg>
              </a>
              <a
                href="/corporate-membership"
                onClick={scrollToTop}
                className="tw-group  tw-text-lg tw-whitespace-nowrap
                                            tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 tw-rounded-md  
                                            tw-bg-gray-300 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-md tw-bg-opacity-10"
              >
                <p className=" tw-font-semibold tw-text-white">
                  <Trans>check_more</Trans>
                </p>
                <svg
                  className=" group-hover:tw-translate-x-3 tw-duration-300 tw-transition tw-w-8"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="7.5"
                    y="19.5"
                    width="3"
                    height="21"
                    rx="1"
                    transform="rotate(-90 7.5 19.5)"
                    fill="white"
                  />{" "}
                  <path
                    d="M16.9393 25.9393C16.3536 26.5251 16.3536 27.4749 16.9393 28.0607C17.5251 28.6464 18.4749 28.6464 19.0607 28.0607L28.0607 19.0607C28.6285 18.4928 28.6484 17.5784 28.1057 16.9864L19.8557 7.98641C19.2959 7.37574 18.3471 7.33448 17.7364 7.89427C17.1257 8.45406 17.0845 9.40291 17.6443 10.0136L24.9238 17.9549L16.9393 25.9393Z"
                    fill="white"
                  />{" "}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="tw-order-2 tw-ml-10 tw-mb-10 md:tw-mb-0 tw-flex tw-items-center md:tw-col-span-2 md:tw-mr-12">
          <img src="https://adminv2.goubba.com/image?path=react-web/assets/pro member.webp"></img>
        </div>
      </div>
      {/* events */}
      <div className="tw-text-3xl  tw-my-24 md:tw-w-11/12 tw-mx-auto">
        <p className="md:tw-hidden tw-mb-12 tw-text-white tw-font-medium tw-text-center md:tw-text-left ">
          <Trans>schedue_send</Trans>
        </p>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3">
          <div className="tw-flex tw-justify-center tw-col-span-2  tw-mx-4 tw-mb-10 md:tw-mb-0">
            <img
              className=""
              src="https://adminv2.goubba.com/image?path=react-web/assets/calander_new.webp"
              alt=""
            ></img>
          </div>
          <div className=" tw-mx-4 lg:tw-mx-12">
            <div className="tw-space-y-6 tw-mx-auto ">
              <p
                className="tw-hidden md:tw-block tw-text-white tw-font-medium tw-text-center md:tw-text-left tw-break-words 
                                        tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-6xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
              >
                <Trans>schedue_send</Trans>
              </p>
              <div className="tw-flex tw-justify-center md:tw-justify-start">
                <div
                  className="tw-group  tw-text-lg tw-whitespace-nowrap
                                                tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 tw-bg-amber-500 tw-rounded-md  "
                >
                  <p className=" tw-font-semibold tw-text-black">
                    <Trans>coming_soon</Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* send and track */}
      <div className="tw-bg-[#25051B] tw-py-16 md:tw-py-24 tw-my-24  tw-mb-12 ">
        <p
          className="md:tw-hidden tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                            tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
        >
          <Trans>send_track</Trans>
        </p>
        <div
          className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 md:tw-w-11/12 tw-mx-auto
                                tw-my-12"
        >
          <div className="tw-flex tw-items-center tw-mx-4 md:tw-mx-auto  tw-order-3 md:tw-order-1">
            <div className="tw-space-y-12 tw-mx-4 lg:tw-mx-24 tw-w-full">
              <p
                className="tw-hidden md:tw-flex tw-text-white tw-font-medium tw-text-center md:tw-text-left 
                                        tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
              >
                <Trans>send_track</Trans>
              </p>
              <div className="tw-flex tw-w-full tw-justify-center md:tw-justify-start">
                <a
                  href="https://corporate.goubba.com/register"
                  className="tw-group 
                                        tw-flex twhidden tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                        tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 "
                >
                  <p className="tw-font-semibold tw-text-white">
                    <Trans>start_now</Trans>
                  </p>
                  <svg
                    className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                    viewBox="0 0 30 31"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <rect
                      opacity="0.3"
                      x="6.25"
                      y="16.75"
                      width="2.5"
                      height="17.5"
                      rx="1"
                      transform="rotate(-90 6.25 16.75)"
                      fill="white"
                    />{" "}
                    <path
                      d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                      fill="white"
                    />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-justify-center lg:tw-justify-end tw-order-2">
            <img
              className=""
              src="https://adminv2.goubba.com/image?path=react-web/assets/Group 34537webp.webp"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      {/* wallet */}
      <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 tw-bg-[#25051B] tw-pb-12">
        <div className="tw-flex tw-justify-center md:tw-justify-start ">
          <img
            className="tw-hidden md:tw-flex"
            src="https://adminv2.goubba.com/image?path=react-web/assets/Frame 37065webp.webp"
            alt=""
          ></img>
          <img
            className="md:tw-hidden"
            src="https://adminv2.goubba.com/image?path=react-web/assets/corporatefourmobile.png"
            alt=""
          ></img>
        </div>
        <div className="tw-flex tw-items-center md:tw-w-11/12">
          <div className="tw-space-y-12">
            <p
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl 2xl:tw-text-7xl tw-z-20 lg:tw-leading-[60px] 2xl:tw-leading-[80px]"
            >
              <Trans>unused_rewards</Trans>
            </p>

            <div className="tw-flex tw-justify-center md:tw-justify-start ">
              <button
                href="https://partner.goubba.com"
                disabled
                className="twgroup tw-relative tw-hidden
                                            twflex tw-justify-center tw-items-center tw-px-8 tw-py-2 
                                            tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 "
              >
                <div
                  className="tw-text-xs 
                                                tw-px-1 tw-py-0.5 tw-gap-4 tw-bg-amber-500 tw-rounded-md  "
                >
                  <p className="tw-text-black ">
                    <Trans>soon</Trans>
                  </p>
                </div>
                <p className="tw-font-semibold tw-text-white tw-uppercase">
                  <Trans>start_now</Trans>
                </p>
                <svg
                  className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                  viewBox="0 0 30 31"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    opacity="0.3"
                    x="6.25"
                    y="16.75"
                    width="2.5"
                    height="17.5"
                    rx="1"
                    transform="rotate(-90 6.25 16.75)"
                    fill="white"
                  />{" "}
                  <path
                    d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                    fill="white"
                  />{" "}
                </svg>
              </button>
              <div
                className="tw-group  tw-text-lg tw-whitespace-nowrap
                                            twflex tw-hidden tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 tw-bg-amber-500 tw-rounded-md  "
              >
                <p className=" tw-font-semibold tw-text-black tw-uppercase">
                  <Trans>coming_soon</Trans>
                </p>
              </div>
              <div className="tw-flex tw-justify-center md:tw-justify-start">
                <a
                  href="https://corporate.goubba.com/register"
                  className="tw-group tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 
                                                tw-bg-gray-400 tw-rounded-md tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-sm tw-bg-opacity-10 
                                                "
                >
                  <p className="tw-font-semibold tw-text-white">
                    <Trans>start_now</Trans>
                  </p>
                  <svg
                    className="tw-w-8 group-hover:tw-translate-x-2 tw-duration-800 tw-transition"
                    viewBox="0 0 30 31"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <rect
                      opacity="0.3"
                      x="6.25"
                      y="16.75"
                      width="2.5"
                      height="17.5"
                      rx="1"
                      transform="rotate(-90 6.25 16.75)"
                      fill="white"
                    />{" "}
                    <path
                      d="M14.1161 22.1161C13.628 22.6043 13.628 23.3957 14.1161 23.8839C14.6043 24.372 15.3957 24.372 15.8839 23.8839L23.3839 16.3839C23.8571 15.9107 23.8737 15.1487 23.4214 14.6553L16.5464 7.15534C16.08 6.64644 15.2892 6.61207 14.7803 7.07856C14.2714 7.54505 14.2371 8.33576 14.7036 8.84466L20.7698 15.4624L14.1161 22.1161Z"
                      fill="white"
                    />{" "}
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* full-stack */}
      <div className="tw-py-16 md:tw-py-24">
        <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-2 md:tw-w-11/12 tw-mx-auto">
          <div className="tw-my-10 md:tw-my-0 md:tw-flex tw-items-center md:tw-w-11/12 tw-overflow-x-auto md:tw-overflow-x-hidden">
            <div
              className=" tw-flex md:tw-flex-none md:tw-grid md:tw-grid-cols-2 tw-text-white tw-gap-6
                            tw-w-full tw-mx-3"
            >
              <div className=" tw-bg-[#0C0108] tw-rounded-lg tw-p-12">
                <svg
                  width="83"
                  height="84"
                  viewBox="0 0 83 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.4671 25.4957L31.2002 23.7397C29.5824 23.5406 28.0251 24.4246 27.3667 25.9158L11.3494 62.1963C10.5062 64.1064 11.4109 66.3353 13.3469 67.1172L45.7998 80.2244C47.6929 80.989 49.8474 80.0741 50.612 78.181L67.1208 37.3058C67.8875 35.4075 66.9654 33.2475 65.0641 32.4882L56.1959 28.9468C56.1773 29.0137 56.1548 29.0803 56.1281 29.1462C55.7458 30.0928 54.6686 30.5502 53.722 30.1679L46.6216 27.3001C45.8724 26.9976 45.4296 26.2596 45.4671 25.4957Z"
                    fill="white"
                    fillOpacity="0.1"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.0256 18.4412C22.454 18.5779 21.1422 19.6968 20.7595 21.2273L11.3923 58.6892C10.8885 60.7039 12.1427 62.7382 14.1691 63.193L48.3478 70.864C50.3399 71.3111 52.3173 70.0586 52.7644 68.0665L62.4209 25.0413C62.8682 23.0483 61.6146 21.0703 59.6214 20.6242L43.1963 16.9473C42.8264 16.8645 42.446 16.8391 42.0684 16.8719L24.0256 18.4412ZM44.9561 22.644L42.877 22.1773C42.9479 21.2754 42.3471 20.435 41.4386 20.2311C40.5302 20.0272 39.6278 20.5302 39.3065 21.376L37.4843 20.967C36.4882 20.7435 35.4995 21.3697 35.276 22.3658C35.0524 23.3618 35.6787 24.3505 36.6747 24.5741L44.1465 26.251C45.1426 26.4746 46.1313 25.8483 46.3548 24.8523C46.5784 23.8562 45.9522 22.8675 44.9561 22.644Z"
                    fill="white"
                    fillOpacity="0.5"
                  />{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1867 6.71289C11.145 6.71289 9.48987 8.36801 9.48987 10.4097V54.5073C9.48987 56.549 11.145 58.2041 13.1867 58.2041H48.3064C50.348 58.2041 52.0032 56.549 52.0032 54.5073V10.4097C52.0032 8.36801 50.348 6.71289 48.3064 6.71289H13.1867ZM34.5751 11.9934H32.444C32.3157 11.0979 31.5454 10.4095 30.6144 10.4095C29.6833 10.4095 28.9131 11.0979 28.7848 11.9934H26.9174C25.8966 11.9934 25.069 12.8209 25.069 13.8418C25.069 14.8626 25.8966 15.6902 26.9174 15.6902H34.5751C35.5959 15.6902 36.4235 14.8626 36.4235 13.8418C36.4235 12.8209 35.5959 11.9934 34.5751 11.9934Z"
                    fill="white"
                  />{" "}
                </svg>
                <h3 className="tw-text-xl md:tw-text-3xl tw-font-semibold tw-w-40 md:tw-w-2/3">
                  <Trans>incentives</Trans>
                </h3>
                <p className="ld:tw-text-2xl tw-mt-4">
                  <Trans>incentives_txt</Trans>
                </p>
              </div>
              <div className=" tw-bg-[#0C0108] tw-rounded-lg tw-p-12">
                <svg
                  width="84"
                  height="84"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="11.079"
                    y="30.6382"
                    width="55.0382"
                    height="45.6887"
                    rx="6.34446"
                    fill="white"
                  />{" "}
                  <path
                    d="M44.2428 51.8068C44.2428 48.884 46.6122 46.5146 49.5349 46.5146H66.1169V60.627H49.5349C46.6122 60.627 44.2428 58.2576 44.2428 55.3349V51.8068Z"
                    fill="#C9C9C9"
                    fillOpacity="0.75"
                  />{" "}
                  <circle
                    cx="50.8482"
                    cy="53.5708"
                    r="2.65653"
                    transform="rotate(105 50.8482 53.5708)"
                    fill="white"
                  />{" "}
                  <circle
                    cx="54.6638"
                    cy="14.335"
                    r="7.71242"
                    fill="white"
                    fillOpacity="0.1"
                  />{" "}
                  <circle
                    cx="34.7482"
                    cy="29.7593"
                    r="7.71242"
                    fill="#F7F7F7"
                  />{" "}
                  <circle
                    cx="42.3634"
                    cy="20.1919"
                    r="7.71242"
                    fill="white"
                    fillOpacity="0.5"
                  />{" "}
                </svg>
                <h3 className="tw-text-xl md:tw-text-3xl tw-font-semibold tw-w-40 md:tw-w-2/3">
                  <Trans>benefits</Trans>
                </h3>
                <p className="ld:tw-text-2xl tw-mt-4">
                  <Trans>benefits_txt</Trans>
                </p>
              </div>
              <div className=" tw-bg-[#0C0108] tw-rounded-lg tw-p-12">
                <svg
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <rect
                    x="34.7347"
                    y="17.4565"
                    width="44.2961"
                    height="49.0421"
                    rx="3.95501"
                    transform="rotate(28.2488 34.7347 17.4565)"
                    fill="white"
                    fillOpacity="0.1"
                  />{" "}
                  <rect
                    x="18.2968"
                    y="15.2925"
                    width="44.2961"
                    height="49.0421"
                    rx="3.95501"
                    transform="rotate(12.0112 18.2968 15.2925)"
                    fill="white"
                    fillOpacity="0.25"
                  />{" "}
                  <rect
                    x="4.00818"
                    y="13.0366"
                    width="44.2961"
                    height="49.0421"
                    rx="3.95501"
                    fill="white"
                  />{" "}
                </svg>
                <h3 className="tw-text-xl md:tw-text-3xl tw-font-semibold tw-w-40 md:tw-w-2/3">
                  <Trans>catalogue</Trans>
                </h3>
                <p className="ld:tw-text-2xl tw-mt-4">
                  <Trans>catalogue_txt</Trans>
                </p>
              </div>
              <div className=" tw-bg-[#0C0108] tw-rounded-lg tw-p-12">
                <svg
                  width="83"
                  height="83"
                  viewBox="0 0 83 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <g clipPath="url(#clip0_1984_62313)">
                    {" "}
                    <rect
                      x="13.7437"
                      y="23.272"
                      width="35.4851"
                      height="55.0382"
                      rx="3.62093"
                      transform="rotate(-23.4725 13.7437 23.272)"
                      fill="white"
                    />{" "}
                    <circle
                      cx="40.8348"
                      cy="41.1153"
                      r="8.32815"
                      transform="rotate(-23.4725 40.8348 41.1153)"
                      fill="#D9D9D9"
                    />{" "}
                    <rect
                      x="20.2893"
                      y="16.0688"
                      width="35.4851"
                      height="55.0382"
                      rx="3.62093"
                      transform="rotate(-6.37826 20.2893 16.0688)"
                      fill="white"
                      fillOpacity="0.5"
                    />{" "}
                    <circle
                      cx="40.9387"
                      cy="41.0872"
                      r="8.32815"
                      transform="rotate(-6.37826 40.9387 41.0872)"
                      fill="#D9D9D9"
                      fillOpacity="0.5"
                    />{" "}
                    <rect
                      x="33.9037"
                      y="9.47754"
                      width="35.4851"
                      height="55.0382"
                      rx="3.62093"
                      transform="rotate(20.332 33.9037 9.47754)"
                      fill="white"
                      fillOpacity="0.1"
                    />{" "}
                    <circle
                      cx="41.1047"
                      cy="41.1077"
                      r="8.32815"
                      transform="rotate(20.332 41.1047 41.1077)"
                      fill="#BABABA"
                      fillOpacity="0.1"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="clip0_1984_62313">
                      {" "}
                      <rect
                        width="82.2668"
                        height="82.2668"
                        fill="white"
                        transform="translate(0.407227 0.725586)"
                      />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>
                <h3 className="tw-text-xl md:tw-text-3xl tw-font-semibold tw-w-40 md:tw-w-2/3">
                  <Trans>payouts</Trans>
                </h3>
                <p className="ld:tw-text-2xl tw-mt-4">
                  <Trans>payouts_txt</Trans>
                </p>
              </div>
            </div>
          </div>
          <div className=" tw-text-white">
            <h1
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-z-20 lg:tw-leading-[60px]"
            >
              <Trans>fullstack_solution</Trans>
            </h1>
            <p className=" tw-hidden md:tw-flex tw-text-2xl tw-my-6">
              <Trans>fullstack_solution_txt</Trans>
            </p>
            <div className=" tw-m-6 md:tw-m-0">
              <img
                className=""
                src="https://adminv2.goubba.com/image?path=react-web/assets/fully stack.webp"
              ></img>
            </div>

            <p className=" md:tw-hidden tw-text-2xl tw-my-6 tw-mx-6 tw-text-center">
              <Trans>fullstack_solution_txt</Trans>
            </p>
          </div>
        </div>
        <div className=" tw-flex tw-justify-center tw-mt-12">
          <a
            href="https://corporate.goubba.com/register"
            className="tw-group  tw-text-lg tw-whitespace-nowrap
                                    tw-flex tw-justify-center tw-items-center tw-px-8 tw-py-2 tw-gap-4 tw-rounded-md  
                                    tw-bg-gray-300 tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-md tw-bg-opacity-10"
          >
            <p className=" tw-font-semibold tw-text-white tw-uppercase">
              <Trans>start_now</Trans>
            </p>
            <svg
              className=" group-hover:tw-translate-x-3 tw-duration-300 tw-transition tw-w-8"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <rect
                opacity="0.3"
                x="7.5"
                y="19.5"
                width="3"
                height="21"
                rx="1"
                transform="rotate(-90 7.5 19.5)"
                fill="white"
              />{" "}
              <path
                d="M16.9393 25.9393C16.3536 26.5251 16.3536 27.4749 16.9393 28.0607C17.5251 28.6464 18.4749 28.6464 19.0607 28.0607L28.0607 19.0607C28.6285 18.4928 28.6484 17.5784 28.1057 16.9864L19.8557 7.98641C19.2959 7.37574 18.3471 7.33448 17.7364 7.89427C17.1257 8.45406 17.0845 9.40291 17.6443 10.0136L24.9238 17.9549L16.9393 25.9393Z"
                fill="white"
              />{" "}
            </svg>
          </a>
        </div>
      </div>

      {/* Questions */}
      <div className="tw-bg-[#180310] tw-pt-10 tw-pb-8 tw-px-4 md:tw-px-0 md:tw-pt-24">
        <div className="tw-grid tw-grid-flow-row md:tw-grid-cols-3 md:tw-px-8 tw-mx-auto">
          <div className="tw-flex tw-items-center md:tw-items-start md:tw-flex-col tw-items-start">
            <p
              className="tw-text-white tw-font-medium tw-text-center md:tw-text-left tw-mx-4 md:tw-mx-0
                                    tw-text-3xl md:tw-text-3xl lg:tw-text-5xl tw-mb-8 lg:tw-pr-12 tw-z-20 lg:tw-leading-[60px] tw-mt-4 md:tw-mt-0"
            >
              <Trans>questions_answers</Trans>
            </p>
          </div>
          <div className="tw-text-white md:tw-col-span-2">
            <Question
              quest={<Trans>refund_question</Trans>}
              ans={<Trans>refund_question_txt</Trans>}
            />
            <Question
              quest={<Trans>digitalized_question</Trans>}
              ans={<Trans>digitalized_question_txt</Trans>}
            />
            <Question
              quest={<Trans>expiration_question</Trans>}
              ans={<Trans>expiration_question_txt</Trans>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
