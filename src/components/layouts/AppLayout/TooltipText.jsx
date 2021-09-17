const TooltipText = ({ tooltip, id, entity, kind }) => {
  const getTextKind = () => {
    let textKind = "";
    switch (tooltip.method) {
      case "POST":
        textKind = "Сохранена";
        break;
      case "PUT":
        textKind = "Изменена";
        break;
      case "DELETE":
        textKind = "Удалена";
        break;
      default:
        break;
    }
    if (kind) textKind = textKind.slice(0, textKind.length - 1);
    return textKind;
  };
  if (tooltip.type === "success") {
    return `Успех! ${entity} №${id} ${getTextKind()}`;
  }
  if (tooltip.type === "error") return "Что-то пошло не-так";
  return "";
};

export default TooltipText;
