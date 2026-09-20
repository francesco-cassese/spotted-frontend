// Il testo lo passo con le props, così posso usare lo stesso componente in più posti
function LoadingMessage({ message }) {
    return (
        <p className="text-center text-muted">{message}</p>
    );
}
export default LoadingMessage;
