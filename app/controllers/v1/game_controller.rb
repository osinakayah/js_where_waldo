class V1::GameController < ApplicationController
  def check_position

    Character.all.each do |c|

      x_difference = 0
      y_difference = 0


      x_difference = params[:x] - c.positionX if params["x"].is_a? Integer


      y_difference = params[:y] - c.positionY if params["y"].is_a? Integer

      y_difference = y_difference.abs
      x_difference = x_difference.abs

      if y_difference < 30 && x_difference < 30
        return render json: {
            status: "success",
            message: "#{c.name} character here"
        }

      end


    end

    render json: {
        status: "error",
        message: "No character here"
    }
  end
end
