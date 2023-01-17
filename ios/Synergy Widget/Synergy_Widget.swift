//
//  Synergy_Widget.swift
//  Synergy Widget
//
//  Created by Rizki Abdillah on 17/01/23.
//

import WidgetKit
import SwiftUI
import Intents

struct Provider: IntentTimelineProvider {
  func placeholder(in context: Context) -> SimpleEntry {
    SimpleEntry(date: Date(), configuration: ConfigurationIntent())
  }
  
  func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
    let entry = SimpleEntry(date: Date(), configuration: configuration)
    completion(entry)
  }
  
  func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
    var entries: [SimpleEntry] = []
    
    // Generate a timeline consisting of five entries an hour apart, starting from the current date.
    let currentDate = Date()
    for hourOffset in 0 ..< 5 {
      let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
      let entry = SimpleEntry(date: entryDate, configuration: configuration)
      entries.append(entry)
    }
    
    let timeline = Timeline(entries: entries, policy: .atEnd)
    completion(timeline)
  }
}

struct SimpleEntry: TimelineEntry {
  let date: Date
  let configuration: ConfigurationIntent
  
}

struct Synergy_WidgetEntryView : View {
  var entry: Provider.Entry
  
  var body: some View {
    ZStack{
      VStack(){
        Image("synergy").resizable().scaledToFit().edgesIgnoringSafeArea(.all)
        
        HStack(){
          Spacer()
          VStack(alignment: .leading) {
            Link(destination: URL(string: "synergy://home")!, label: {
              
              Image("home")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 35, height: 35, alignment: .trailing )
              Text("HOME")
                .font(.system(size:10))
                .bold()
            })}
          Spacer()
          VStack(alignment: .leading) {
            Link(destination: URL(string: "synergy://search")!, label: {
              Image("search")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 35, height: 35, alignment: .trailing )
              Text("SEARCH")
                .font(.system(size:10))
                .bold()
            })
          }
          Spacer()
          VStack(alignment: .leading) {
            Link(destination: URL(string: "synergy://setting")!, label: {
              
              Image("setting")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 35, height: 35, alignment: .trailing )
              Text("SETTING")
                .font(.system(size:10))
                .bold()
            })}
          Spacer()
        }
      }}
  }
}

struct Synergy_Widget: Widget {
  let kind: String = "Synergy_Widget"
  
  var body: some WidgetConfiguration {
    IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
      Synergy_WidgetEntryView(entry: entry)
    }
    .configurationDisplayName("My Widget")
    .description("This is an example widget.")
  }
}

struct Synergy_Widget_Previews: PreviewProvider {
  static var previews: some View {
    Synergy_WidgetEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent()))
      .previewContext(WidgetPreviewContext(family: .systemSmall))
  }
}
