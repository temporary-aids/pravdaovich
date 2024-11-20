export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 py-8 text-sm">
      <div className="container mx-auto px-4">
        <p>
          105120, г. Москва, ул. Нижняя Сыромятническая, 10 стр. 7, этаж 1,
          помещ. Ж.
        </p>
        <p>
          ИНН 9710013762 КПП 770901001, ОГРН 1167700059669, АО «АЛЬФА-БАНК» р/с
          40703810401400000203, к/с 30101810200000000593
        </p>
        <a href="mailto: info@spid.center">info@spid.center</a>
        <a className="ml-2" href={"tel:8-495-849-29-69"}>
          8 (495) 849-29-69
        </a>

        <div className="flex gap-4 mt-4">
          <a
            href="https://spid.center/ru/about"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            О Фонде
          </a>
          <a
            href="https://spid.center/ru/reports"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Отчёты
          </a>
        </div>

        <p className="mt-4 font-semibold">
          Фонд помощи людям, живущим с ВИЧ &quot;СПИД.ЦЕНТР&quot;
        </p>
      </div>
    </footer>
  );
};
