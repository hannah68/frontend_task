import SearchEngine from "../features/SearchEngine";
import DashboardLayout from "../layout/DashboardLayout";

// |        |------------------------|
// |        |                        |
// |sidebar |         main           |
// |        |                        |
// |        |---------footer----------

const SearchPage = () => {
  return (
    <DashboardLayout>
      <SearchEngine />
    </DashboardLayout>
  );
};

export default SearchPage;
