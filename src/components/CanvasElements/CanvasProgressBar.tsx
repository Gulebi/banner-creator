import { Rect, Transformer } from "react-konva";
import { ICanvasElement } from "../../types";
import { useRef } from "react";
import Konva from "konva";
import { onSelectShape } from "../../utils";

interface IProps {
    data: ICanvasElement;
    isSelected: boolean;
}

function CanvasProgressBar({ data, isSelected }: IProps) {
    const elRef = useRef<Konva.Rect>(null);
    const trRef = useRef<Konva.Transformer>(null);

    return (
        <>
            <Rect
                ref={elRef}
                {...data.baseInfo}
                cornerRadius={30}
                draggable
                onClick={() => onSelectShape(elRef, trRef)}
            />
            {isSelected && <Transformer ref={trRef} rotateEnabled={false} />}
        </>
    );
}

export default CanvasProgressBar;
