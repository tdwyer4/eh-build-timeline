import React from "react";
import styles from "./HotSpots.module.css";

function HotSpots() {
  return (
    <div className={styles.container}>
      {/* <input type="checkbox" className={styles.input} id="input1" name="inputs">
	<input type="checkbox" className={styles.input} id="input2" name="inputs">
	<input type="checkbox" className={styles.input} id="input3" name="inputs"> */}
      <div id="b1" className={styles.button}>
        1
      </div>
      <div id="b2" className={styles.button}>
        2
      </div>
      <div id="b3" className={styles.button}>
        3
      </div>

      {/*<div id="content1" className="content">
    <div style="text-align: right;">
      <label for="input1" className="cross">X</label>
    </div>
    <h1>Content one</h1>
    <p className="bodyCopy">Additional content goes here.</p>
    <a href="#" className="cta">Find out more</a>
  </div>
  <div id="content2" className="content">
    <div style="text-align: right;">
      <label for="input2" className="cross">X</label>
    </div>
    <h1>Content two</h1>
    <p className="bodyCopy">Additional content goes here.</p>
    <a href="#" className="cta">Find out more</a>
  </div>
  <div id="content3" className="content">
    <div style="text-align: right;">
      <label for="input3" className="cross">X</label>
    </div>
    <h1>Content three</h1>
    <p className="bodyCopy">Additional content goes here.</p>
    <a href="#" className="cta">Find out more</a>
  </div> */}
    </div>
  );
}

export default HotSpots;
