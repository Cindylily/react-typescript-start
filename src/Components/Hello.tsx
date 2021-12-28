import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void
}

// add state
// interface State {
//     currentEnthusiasm: number;
// }

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
            Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

// class Hello extends React.Component<Props, State> {

//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             currentEnthusiasm: props.enthusiasmLevel || 1
//         }
//     }

//     onIncrement = () => this.updateEnthusasim(this.state.currentEnthusiasm + 1);
//     onDecrement = () => this.updateEnthusasim(this.state.currentEnthusiasm - 1);

//     updateEnthusasim = (currentEnthusiasm: number) => {
//         this.setState({ currentEnthusiasm });
//     }

//     render() {
//         const { name, onIncrement, onDecrement } = this.props;

//         if (this.state.currentEnthusiasm <= 0) {
//             throw new Error('You should be more enthusiastic, :D');
//         }

//         return(
//             <div className="hello">
//                 <div className="greeting">
//                     Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
//                 </div>
//                 <button onClick={onIncrement}>+</button>
//                 <button onClick={onDecrement}>-</button>
//             </div>
//         )
//     }
// }

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello;