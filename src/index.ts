import { sum } from "./utils/math";

function doGet(e: GoogleAppsScript.Events.DoGet) {
  const n1 = parseInt(e.parameter.n1 || "10");
  const n2 = parseInt(e.parameter.n2 || "10");

  HtmlService.createHtmlOutput(`<p>${n1} + ${n2} = ${sum(n1, n2)}</p>`);
}

global.doGet = doGet;
