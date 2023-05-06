import { Text, Transformer } from "react-konva";
import { ICanvasElement } from "../../types";
import { useRef } from "react";
import Konva from "konva";
import { onSelectShape } from "../../utils";

interface IProps {
    data: ICanvasElement;
    isSelected: boolean;
}

function CanvasText({ data, isSelected }: IProps) {
    const elRef = useRef<Konva.Text>(null);
    const trRef = useRef<Konva.Transformer>(null);

    const { textInfo } = data;

    return (
        <>
            <Text
                ref={elRef}
                {...data.baseInfo}
                text={textInfo?.text}
                fontSize={textInfo?.fontSize}
                draggable
                onClick={() => onSelectShape(elRef, trRef)}
            />
            {isSelected && <Transformer ref={trRef} rotateEnabled={false} />}
        </>
    );
}

export default CanvasText;
