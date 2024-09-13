import PrincipalModal from "@/components/PrincipalModal";

const PrincipalScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <PrincipalModal />
    </div>
  );
};

export default PrincipalScreen;


