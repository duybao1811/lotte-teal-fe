import TimelineEvent from '@/views/CompanyView/components/CompanyHistory/TimelineEvent';

export interface ITimelineEvent {
  year: string;
  events: string[];
  image: string;
}

interface TimelineProps {
  events: ITimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <section className="relative mx-auto w-full">
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-stroke" />
      </div>

      <div className="md:space-y-32 space-y-16 relative overflow-hidden">
        {events.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
