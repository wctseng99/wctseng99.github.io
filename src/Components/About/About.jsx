import React from "react";

function about() {
  return (
    <div className="mb-16 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 font-bold uppercase tracking-widest text-slate-800 dark:text-slate-400 ">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          sodales laoreet ex sed aliquet. Fusce consequat velit eget nulla
          luctus, ac mattis quam suscipit. Vestibulum pharetra sagittis ante,
          nec eleifend libero semper a. Nam ipsum elit, consequat a maximus
          eget, cursus vitae libero. Fusce fermentum, tellus at accumsan
          pulvinar, eros nunc hendrerit nulla, et laoreet neque arcu sit amet
          purus. Aliquam congue bibendum arcu vel maximus.
        </p>
        <p className="mb-4">
          Aenean quis metus ut sem fermentum consectetur id at nibh. 
          Etiam pulvinar, diam vitae congue ullamcorper, mi enim ornare lectus, at
          faucibus est urna quis diam. Pellentesque interdum ligula lorem, 
          egetblandit odio consectetur ut. Aliquam tristique lacus at lectus
          viverra, nec pulvinar nunc dignissim. In volutpat sit amet mi id
          volutpat. Cras molestie facilisis nisi, vel consequat libero sagittis
          imperdiet.
        </p>
      </div>
    </div>
  );
}

export default about;
