export const handleApiErrors = async (response: Response): Promise<string> => {
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    try {
      const errorData = await response.json();

      if (errorData.message) return errorData.message;
      if (errorData.error) return errorData.error;
      if (errorData.statusCode) return errorData.statusCode;
      if (typeof errorData === "string") return errorData;

      return `Error ${response.status}: ${response.statusText}`;
    } catch {
      return `Error ${response.status}: ${response.statusText}`;
    }
  }
  try {
    const textError = await response.text();
    return textError || `Error ${response.status}: ${response.statusText}`;
  } catch {
    return `Error ${response.status}: ${response.statusText}`;
  }
};
