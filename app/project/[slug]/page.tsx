import { projectDatas } from "@/data";

const ProjectDetail = ({ params }: { params: { slug:string } }) => {
  const project = projectDatas.find((p) => p.slug === params.slug);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="bg-black-100 overflow-y-auto w-full min-h-screen p-4 md:p-10">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-12"> {/* Menambah gap */}
        
        {/* --- Bagian Judul --- */}
        <h1 className="font-semibold text-xl lg:text-3xl border-b-2 border-white pb-2 text-center">
          {project.title}
        </h1>

        {/* --- Responsive Power BI Embed --- */}
        {project.url && (
          <div className="w-full">
            <h2 className="text-lg lg:text-xl font-medium text-white mb-4">Dashboard Interaktif</h2>
            <div className="relative w-full aspect-video shadow-lg rounded-md overflow-hidden">
              <iframe
                title={project.title}
                src={project.url}
                className="absolute top-0 left-0 w-full h-full border-0 z-[10]"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        )}

        {/* --- Responsive PDF Embed Start --- */}
        {project.pdf && (
          <div className="w-full">
            <h2 className="text-lg lg:text-xl font-medium text-white mb-4">Dokumen Pendukung</h2>
            <div className="relative w-full aspect-[4/5] max-h-[90vh] shadow-lg rounded-md overflow-hidden">
              {/* - `aspect-[4/5]`: Aspect ratio yang lebih cocok untuk dokumen (portrait) daripada video.
                - `max-h-[90vh]`: Mencegah viewer menjadi terlalu tinggi di layar yang sangat lebar.
              */}
              <iframe
                title={`Dokumen PDF untuk ${project.title}`}
                src={project.pdf}
                className="absolute top-0 left-0 w-full h-full border-0 z-[1]"
              ></iframe>
            </div>
          </div>
        )}
        {/* --- Responsive PDF Embed End --- */}

      </div>
    </div>
  );
};

export default ProjectDetail;