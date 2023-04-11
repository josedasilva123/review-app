export const Input = ({ type, id, label, placeholder, register, error }) => {
    return(
        <div>
            {label ? <label htmlFor="">{label}</label> : null}
            <input type={type} id={id} placeholder={placeholder} {...register} />
            {error ? <p>{error.message}</p> : null}
        </div>
    )
}