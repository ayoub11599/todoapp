import { useState, ReactNode } from "react";

interface IProps {
    btnClass: string,
    btnText: string,
    children: ReactNode
}

export default function(props: IProps) {

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(s => !s);
    }

    return (
        <>
            <button
                    type="button"
                    className={props.btnClass}
                    onClick={showModal}
                >
                    {props.btnText}
                </button>
            <div
                className={"fixed bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" + ( !show ? " hidden" : " inset-0" )}
                onClick={showModal}
            ></div>
            <div
                className={"absolute p-5 border w-96 shadow-lg rounded-md bg-white" + (!show ? " hidden" : "")}
                style={{ top: "-10%", left: "50%", transform: "translate(-50%, 10%)" }}
            >
                <div className="mt-3">
                    {props.children}
                </div>
            </div>
        </>
    )
}