
export default function SVGDownloadButton(props: {className: string}) {
  const handleDownload = () => {
    // Find the SVG element
    const svgElement = document.getElementById(props.className);
    
    if (!svgElement) {
      console.error('SVG element not found');
      return;
    }

    // Get the SVG content
    const svgContent = svgElement.innerHTML;
    
    // Create a Blob from the SVG content
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'layout.svg';
    
    // Append link to body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className="text-white bg-pink-400 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={handleDownload}>
      Download SVG
    </button>
  );
};