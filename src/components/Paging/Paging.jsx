import { useEffect, useRef } from "react";

export const Paging = ({
  totalElements = 0,
  limit = 10,
  page = 1,
  onPageChange = () => {},
  onLimitChange = () => {}
}) => {
  const totalPages = Math.ceil(totalElements / limit);
  const pageInput = useRef(null);

  useEffect(() => {
    if (pageInput.current) {
      pageInput.current.value = page;
    }
  }, [page]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded shadow mt-4">
      {/* Select para cantidad por página */}
      <div className="flex items-center gap-2">
        <label htmlFor="limit" className="text-sm font-semibold">
          Mostrar:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* Navegador de páginas */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (page > 1) onPageChange(page - 1);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-all"
        >
          Anterior
        </button>
        <span className="text-sm">
          Página{" "}
          <input
            ref={pageInput}
            type="number"
            min="1"
            max={totalPages}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= totalPages) {
                onPageChange(value);
              }
            }}
            className="border w-12 text-center rounded mx-1"
          />{" "}
          de {totalPages}
        </span>
        <button
          onClick={() => {
            if (page < totalPages) onPageChange(page + 1);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-all"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
