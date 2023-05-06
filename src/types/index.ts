export interface ICanvasElement {
    id: string;
    type: "avatar" | "progress" | "text";
    baseInfo: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    textInfo?: {
        text: string;
        fontSize: number;
    };
}
