import { Rect, Transformer } from "react-konva";
import { ICanvasElement } from "../../types";
import { useRef, useState } from "react";
import Konva from "konva";
import { onSelectShape } from "../../utils";

interface IProps {
    data: ICanvasElement;
    isSelected: boolean;
}

function CanvasProgressBar({ data, isSelected: isSelectedProp }: IProps) {
    const [isSelected, setIsSelected] = useState<boolean>(isSelectedProp);
    const elRef = useRef<Konva.Rect>(null);
    const trRef = useRef<Konva.Transformer>(null);

    return (
        <>
            <Rect
                ref={elRef}
                {...data.baseInfo}
                cornerRadius={30}
                draggable
                fill="#2C333A"
                onClick={() => {
                    onSelectShape(elRef, trRef);
                    setIsSelected((s) => !s);
                }}
            />
            {isSelected && <Transformer ref={trRef} rotateEnabled={false} />}
        </>
    );
}

export default CanvasProgressBar;
