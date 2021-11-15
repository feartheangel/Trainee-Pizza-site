import React from "react";
import classNames from "classnames";

// class Button extends React.Component {
//   render() {
//     console.log(this.props.outline);
//     return (
//       <button
//         className={classNames("button", {
//           "button--outline": this.props.outline,
//           "button--filed": this.props.children,
//         })}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

const Button = ({ className, outline, infoState, onClick, children }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames("button", className, {
          "button--outline": outline,
          "button--filed": children,
        })}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
