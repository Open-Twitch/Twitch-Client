/* eslint-disable @typescript-eslint/no-explicit-any */

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validateMessage,
  onBlurHandler,
  textarea,
}: {
  field: string;
  label: string;
  value: string;
  onChangeHandler: any;
  type: string;
  showErrorMessage: boolean;
  validateMessage: string;
  onBlurHandler: any;
  textarea?: boolean;
}) => {
  const handleValueChange = (e: any) => {
    onChangeHandler(e.target.value, field);
  };

  const handleInputBlur = (e: any) => {
    onBlurHandler(e.target.value, field);
  };

  return (
    <>
      <div className="auth-form-label">
        <span>{label}</span>
      </div>
      {textarea ? (
        <textarea
          typeof={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: "400px" }}
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
        />
      )}
      <span className="auth-form-validation-message">
        {showErrorMessage && validateMessage}
      </span>
    </>
  );
};
