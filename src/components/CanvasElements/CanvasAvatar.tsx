import { Circle, Transformer } from "react-konva";
import { ICanvasElement } from "../../types";
import { useRef } from "react";
import Konva from "konva";
import { onSelectShape } from "../../utils";

interface IProps {
    data: ICanvasElement;
    isSelected: boolean;
}

function CanvasAvatar({ data, isSelected }: IProps) {
    const elRef = useRef<Konva.Circle>(null);
    const trRef = useRef<Konva.Transformer>(null);

    return (
        <>
            <Circle
                ref={elRef}
                {...data.baseInfo}
                draggable
                fill="#2C333A"
                onClick={() => onSelectShape(elRef, trRef)}
            />
            {isSelected && (
                <Transformer
                    ref={trRef}
                    rotateEnabled={false}
                    enabledAnchors={["top-left", "top-right", "bottom-left", "bottom-right"]}
                />
            )}
        </>
    );
}

export default CanvasAvatar;
