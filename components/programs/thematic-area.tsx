import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Heart, Book } from "lucide-react";
import Link from "next/link";

export function ThematicArea() {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Thematic Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our work is organized around key thematic areas that address the most pressing needs of rural communities.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <Link href="/programs/livelihoods" className="block">
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <Sprout className="h-8 w-8 text-green-600" />
                  Livelihoods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Empowering families through sustainable agriculture, entrepreneurship, and income generation programs.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/programs/environment-disaster-mitigation" className="block">
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <Heart className="h-8 w-8 text-emerald-600" />
                  Environment & Disaster Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Building resilience and promoting sustainable environmental practices to mitigate disaster risks.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/programs/enterprise-marketing-linkages" className="block">
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <Book className="h-8 w-8 text-blue-600" />
                  Enterprise and Marketing Linkages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Facilitating market access and enterprise development for rural entrepreneurs.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/programs/strategic-partnerships" className="block">
            <Card className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2">
                  <Heart className="h-8 w-8 text-red-500" />
                  Strategic Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Collaborating with organizations and stakeholders to maximize impact and reach.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
} 