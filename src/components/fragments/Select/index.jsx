export const Select = ({ children, label, id, register, error }) => {
   return (
      <div>
         {label ? <label htmlFor="">{label}</label> : null}   
         <select id={id} {...register}>{children}</select>
         {error ? <p>{error.message}</p> : null}
      </div>
   );
};
