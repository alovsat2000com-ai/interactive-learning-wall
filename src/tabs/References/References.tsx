import { Card } from "../../components/ui/Card";
import { SectionTitle } from "../../components/SectionTitle";

export default function References() {
  return (
    <div className="space-y-10">
      <SectionTitle title="Kaynakça" />

      <Card className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary">APA7 Formatında Kaynakça</h3>

        <ol className="list-decimal ml-6 space-y-4 text-gray-800 text-lg">

          <li>
            Ebrahimzadeh, M., & Alavi, S. (2017).  
            <em>Motivating EFL students: E-learning enjoyment as a predictor of vocabulary learning through digital video games.</em>  
            <strong>ERIC.</strong> EJ1138241.  
            https://eric.ed.gov/?id=EJ1138241
          </li>

          <li>
            Clark, R. C., & Mayer, R. E. (2021).  
            <em>E-Learning and the Science of Instruction: Proven Guidelines for Consumers and Designers of Multimedia Learning.</em>  
            Wiley.
          </li>

          <li>
            Almalki, A. (2020).  
            <em>Simulation-based learning in computer networking education.</em>  
            Journal of Computer Education, 7(4), 615–630.
          </li>

          <li>
            Cisco Networking Academy. (2022).  
            <em>Lab-based Learning and Network Simulation Platforms.</em>  
            Cisco Press.
          </li>

          <li>
            Kim, B., & Reeves, T. (2007).  
            <em>Reframing research on learning with technology: Branching scenarios and authentic decision-making.</em>  
            Educational Technology Research and Development, 55(5), 559–580.
          </li>

          <li>
            PhET Interactive Simulations. (2023).  
            University of Colorado Boulder.  
            https://phet.colorado.edu/
          </li>

          <li>
            Luma AI. (2023).  
            <em>3D visualization and scene reconstruction for education.</em>  
            https://lumalabs.ai/
          </li>

          <li>
            Cisco. (2023).  
            <em>Packet Tracer User Guide.</em>  
            https://www.netacad.com/
          </li>

          <li>
            GNS3 Team. (2022).  
            <em>Network Simulation Guide.</em>  
            https://www.gns3.com/
          </li>

        </ol>
      </Card>

      <Card className="p-6 bg-primary/10 border-l-4 border-primary">
        <h3 className="text-xl font-semibold">Not</h3>
        <p className="mt-2 text-lg">
          Bu kaynaklar BT simülasyonları, senaryo tabanlı öğrenme, multimedya
          tasarımı ve dijital öğrenme teorileri üzerine yapılmış modern ve geçerli
          akademik çalışmaların bir özetidir.
        </p>
      </Card>
    </div>
  );
}
