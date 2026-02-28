
type DefaultInputprops = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText }: DefaultInputprops) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} type={type} />
        </>
    );
}