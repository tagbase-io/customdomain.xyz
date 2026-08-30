import Counterfeit from "@/components/Counterfeit";
import DemoNote from "@/components/DemoNote";
import Documents from "@/components/Documents";
import Explainer from "@/components/Explainer";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import PrivateBrowsing from "@/components/PrivateBrowsing";
import Product from "@/components/Product";
import Unknown from "@/components/Unknown";
import Verification from "@/components/Verification";
import { useVerification } from "@/hooks/useVerification";

const App = () => {
  const { status, messages, data, unknown } = useVerification();

  if (status === "invalid") return <Counterfeit verification={data} />;

  if (status === "error") {
    return (
      <Unknown
        message={
          unknown
            ? "The address does not match a check we have seen. If you have just tapped the tag for the first time, tap it once more and the result will appear here."
            : (messages[0]?.text ?? "Something went wrong while checking this product.")
        }
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 px-5 py-8 sm:px-14 sm:py-11">
        {status === "idle" ? (
          <Explainer />
        ) : (
          <div className="mx-auto max-w-5xl">
            {data?.incognito ? (
              <PrivateBrowsing verificationId={data.id} />
            ) : (
              <Verification status={status} messages={messages} verificationId={data?.id} />
            )}

            {data && (
              <>
                <div
                  className={`mt-9 grid gap-8 lg:gap-12 ${data.imageUrls.length > 0 ? "lg:grid-cols-2" : ""}`}
                >
                  <Gallery imageUrls={data.imageUrls} title={data.title} />
                  <Product
                    title={data.title}
                    description={data.description}
                    website={data.website}
                    data={data.data}
                  />
                </div>

                <Documents documents={data.documents} />
              </>
            )}

            <DemoNote />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
